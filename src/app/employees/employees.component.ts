import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
interface employees{
  EmpId:string;
  FirstName:string;
  LastName:string;
  Email:string;
  Designation:string;
  PanNumber:string;
  IsActive:string;
  Shift:string;
}
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  empdata!:employees[];
  constructor( private router:Router,
    private http:HttpClient
    ) { }
  

  ngOnInit(): void {
    this.http.get('./assets/data/Employees.json').subscribe(data=>{
        this.empdata=data as employees[];
         console.log(this.empdata);
       })
    }
}
