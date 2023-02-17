import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import namesData from 'src/assets/data/namesData.json';
import { OnInit, ViewChild } from '@angular/core';
import { EmployeeData, Representative } from 'src/app/employee';
import { Table } from 'primeng/table';

import { SalaryService } from '../../services/salary.service';
import salary from 'src/assets/data/salary.json';

interface EmployeeName {
  Name: string;
}

interface LeaveType {
  name: string;
}

@Component({
  selector: 'app-modifypassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
})
export class ChangepasswordComponent {
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
}
