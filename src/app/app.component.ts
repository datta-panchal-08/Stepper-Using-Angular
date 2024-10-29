import { Component } from '@angular/core';
import { Employee } from './Interfaces/Employee';
import { EmployeeService } from './services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmployeeApp';
  employee:any[] =[];
  stepslist: any[] = [
    { stepName: 'Basic Details', isComplete: false },
    { stepName: 'Skills', isComplete: false },
    { stepName: 'Experience', isComplete: false },
  ];
  isCreatedView:boolean = false;
  activeStep: any = this.stepslist[0];
  designations: any[] = [];
  roles: any[] = [];
  stepperProgressValue: number = 8;
  employeeObj: Employee = {
    roleId: 0,
    empId: 0,
    userName: "He",
    empName: '',
    empEmailId: '',
    empDesignationId: 0,
    empContactNo: '',
    empAltContactNo: '',
    empPersonalEmailId: '',
    empExpTotalYear: 0,
    empExpTotalMonth: 0,
    empCity: '',
    empState: '',
    empPinCode: '',
    empAddress: '',
    empPerCity: '',
    empPerState: '',
    empPerPinCode: '',
    empPerAddress: '',
    password: '',
    erpEmployeeSkills: [],
    ermEmpExperiences: []
  };

  constructor(private empService: EmployeeService,private router:Router) { }

  ngOnInit() {
    this.getAllEmployees();
    this.loadDesignations();
    this.loadRoles();
  }

  setActiveStep(step: any) {
    this.activeStep = step;
  }

  goToStep2() {
    const cuurentStep = this.stepslist.find(m => m.stepName == this.activeStep.stepName);
    cuurentStep.isComplete = true;
    this.activeStep = this.stepslist[1];
    this.stepperProgressValue = 50;
  }

  goToStep3() {
    const cuurentStep = this.stepslist.find(m => m.stepName == this.activeStep.stepName);
    cuurentStep.isComplete = true;
    this.activeStep = this.stepslist[2];
    this.stepperProgressValue = 100;
  }

  addSkills() {
    const empSkills = {
      empSkilId: 0,
      empId: this.employeeObj.empId,
      skill: '',
      totalYearExp: 0,
      lastVersionUsed: ''
    };
    this.employeeObj.erpEmployeeSkills.unshift(empSkills);
  }

  addExp() {
    const expObj = {
      empExpId: 0,
      empId: this.employeeObj.empId,
      companyName: '',
      startDate: '',
      enDate: '',
      designation: '',
      projectsWorkedOn: '',
    };
    this.employeeObj.ermEmpExperiences.unshift(expObj);
  }

  getAllEmployees() {
    this.empService.getAllEmployees().subscribe((res: any) => {
      if (res.result) {
        console.log("<?-------------- Employees -----------------?>", res.data);
        this.employee = res.data;
      }
    });
  }

  loadDesignations() {
    this.empService.loadDesignations().subscribe((res: any) => {
      if (res.result) {
        this.designations = res.data;
      }
    });
  }

  loadRoles() {
    this.empService.loadRoles().subscribe((res: any) => {
      if (res.result) {
        this.roles = res.data;
      }
    })
  }

  addEmployee() {
    this.empService.addEmployee(this.employeeObj).subscribe((res: any) => {
      if (res.result) {
        alert("Added Employee Successfully");
        this.getAllEmployees();
      } else {
        alert(res.message);
      }
    });
  }

  updateEmployee(){
    this.empService.updateEmployee(this.employeeObj).subscribe((res:any)=>{
      if (res.result) {
        alert("Updated Employee Successfully");
        this.getAllEmployees();
      } else {
        alert(res.message);
      }
    })
  }

  showList(){
    this.router.navigate(['/emp-list']);
  }

  addNew(){
    this.isCreatedView = !this.isCreatedView;
  }
 
  getEmpById(id:number){
    this.empService.getEmployeeById(id).subscribe((res:any)=>{
      this.isCreatedView = true;
           this.employeeObj = res.data;
           this.employeeObj.empId = id;
    });
  }

  deleteEmployee(id:number){
    this.empService.deleteEmployee(id).subscribe((res:any)=>{
      alert("deleted record successfully");
      this.getAllEmployees();
    })
  }
  
}
