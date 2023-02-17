import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeedDataService{
  constructor(private http: HttpClient) {}
  getEmployeeList(){
    return this.http.get('assets/data/Employees.json');
  }
}

