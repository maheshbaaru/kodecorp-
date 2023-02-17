import { Component } from '@angular/core';
import { EmployeedDataService } from '../services/EmployeesDataService';
//import { Router } from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  empdata:any;
  constructor(
    //private router:Router,
     private service:EmployeedDataService
    ) { }


  ngOnInit(): void {
    this.service.getEmployeeList().subscribe((data1) => {
      console.log(data1);
      this.empdata = data1;
    });
  }

  

}
