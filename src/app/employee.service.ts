import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  getEmp() {
    return this.http.get('assets/data/employee.json');
  }
  getEmployee(id: number) {
    debugger;
    return this.http.get('assets/data/employeeList.json/' + id);
  }
}
