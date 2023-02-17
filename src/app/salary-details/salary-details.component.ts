import { Component, ViewChild } from '@angular/core';
import { EmployeeData, Representative } from '../employee';
import { SalaryService } from '../services/salary.service';
import salary from './salary.json';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-salary-details',
  templateUrl: './salary-details.component.html',
  styleUrls: ['./salary-details.component.css', './salary-details.scss'],
})
export class SalaryDetailsComponent {
  sample = salary;

  representatives: Representative[] = [];
  @ViewChild('dt')
  table!: Table;

  employees: EmployeeData[] | any;

  constructor(private salaryService: SalaryService) {}

  ngOnInit() {
    this.salaryService
      .getCarsSmall()
      .then((employees: any) => (this.employees = employees));
  }
}
