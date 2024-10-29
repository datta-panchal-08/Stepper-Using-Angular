export interface Employee {
    roleId: number;
    empId: number;
    userName:string,
    empName: string;
    empEmailId: string;
    empDesignationId: number;
    empContactNo: string;
    empAltContactNo: string;
    empPersonalEmailId: string;
    empExpTotalYear: number;
    empExpTotalMonth: number;
    empCity: string;
    empState: string;
    empPinCode: string;
    empAddress: string;
    empPerCity: string;
    empPerState: string;
    empPerPinCode: string;
    empPerAddress: string;
    password: string;
    erpEmployeeSkills: ErpEmployeeSkill[]; 
    ermEmpExperiences: ErmEmpExperience[];
  }
interface ErpEmployeeSkill{
    empSkilId:number;
    empId:number;
    skill:string;
    totalYearExp:number;
    lastVersionUsed:string;
}  

interface ErmEmpExperience{
    empExpId:number;
    empId:number;
    companyName:string;
    startDate:string;
    enDate:string;
    designation:string;
    projectsWorkedOn:string;
}

  