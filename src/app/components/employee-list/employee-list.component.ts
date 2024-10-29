import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Interfaces/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees:any [] = [];
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmp();
  }
  
  getEmp(){
    this.empService.getAllEmployees().subscribe((res:any)=>{
          if(res.result){
            this.employees = res.data;
          }
    });
  }
}
