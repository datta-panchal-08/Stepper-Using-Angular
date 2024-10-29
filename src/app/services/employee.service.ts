import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  addEmployee(data:any){
     return this.http.post('https://freeapi.miniprojectideas.com/api/EmployeeApp/CreateNewEmployee',data);
  }

  loadDesignations(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllDesignation');
  }

  loadRoles(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllRoles');
  }

  getEmployeeById(id:number){
    return this.http.get('https://freeapi.miniprojectideas.com/api/EmployeeApp/GetEmployeeByEmployeeId?='+id) 
 }

  getAllEmployees(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllEmployee');
  }

  updateEmployee(data:any){
   return this.http.put(`https://freeapi.miniprojectideas.com/api/EmployeeApp/UpdateEmployee`,data);
  }
  
  deleteEmployee(id:number){
    return this.http.delete('https://freeapi.miniprojectideas.com/api/EmployeeApp/DeleteEmployeeByEmpId?empId='+id);
  }
}
