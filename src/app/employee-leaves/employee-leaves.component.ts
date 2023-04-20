import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import namesData from 'src/assets/data/namesData.json';
import { OnInit, ViewChild } from '@angular/core';
import { EmployeeData, Representative } from 'src/app/employee';
import { Table } from 'primeng/table';

import { SalaryService } from '../services/salary.service';
import salary from 'src/assets/data/salary.json';

interface EmployeeName {
  Name: string;
}

interface LeaveType {
  name: string;
}


@Component({
  selector: 'app-employee-leaves',
  templateUrl: './employee-leaves.component.html',
  styleUrls: ['./employee-leaves.component.css']
})
export class EmployeeLeavesComponent {

  employees: EmployeeData[] | any;
  leaveTypes: LeaveType[];

  names: EmployeeName[];
  empForm: FormGroup;

  constructor(private _fb: FormBuilder, private salaryService: SalaryService) {
    this.names = namesData;
    this.leaveTypes = [
      { name: 'Casual' },
      { name: 'Sick' },
      { name: 'Earned' },
      { name: 'Compensation' },
      { name: 'Optional' },
    ];
    this.empForm = this._fb.group({
      name: '',
      Salary: '',
      LastRevisedDate: '',
      NextRevisedDate: '',
    });
  }

  sample = [
    {
        "FirstName": "HARI RAM",
        "LastName": "KODI",
        "EmployeeID": "9",
        "NumofLeaves": 12,
    }
  ];

  representatives: Representative[] = [];
  @ViewChild('dt')
  table!: Table;

  ngOnInit() {
    this.salaryService
      . getEmployee()
      .then((employees: any) => (this.employees = employees));
  }

}
