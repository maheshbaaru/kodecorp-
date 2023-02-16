 import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import namesData from 'src/assets/data/namesData.json'
// import { OnInit, ViewChild } from '@angular/core';
// import { EmployeeData, Representative } from 'src/app/employee';
// import { Table } from 'primeng/table';
// import salary from 'src/assets/salary.json';
// import { SalaryService } from 'src/app/salary.service';

interface EmployeeName {
  Name: string

}


interface LeaveType {
  name: string
}

@Component({
  selector: 'app-appliedleaves',
  templateUrl: './appliedleaves.component.html',
  styleUrls: ['./appliedleaves.component.css']
})
export class AppliedleavesComponent {
  // employees:EmployeeData[] | any
  // leaveTypes:LeaveType[]


  // names: EmployeeName[];
  // empForm: FormGroup;
  
  // constructor(private _fb:FormBuilder,private salaryService: SalaryService){
  //   this.names = namesData
  //   this.leaveTypes= [
  //     {name: 'Casual'},
  //     {name: 'Sick'},
  //     {name: 'Earned'},
  //     {name: 'Compensation'},
  //     {name: 'Optional'}
  // ];
  //   this.empForm=this._fb.group({
  //     name:'',
  //     Salary:'',
  //     LastRevisedDate:'',
  //     NextRevisedDate:''
  //   })
  // }

  // sample=salary;
  
  // representatives: Representative[] =[];
  // @ViewChild('dt')
  // table!: Table;
  

  
 

    ngOnInit() {
        // this.salaryService.getCarsSmall().then((employees: any) => this.employees = employees);

     

        
    };

 
}

