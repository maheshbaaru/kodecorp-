import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
interface TaxTayes {
  name: string;
}
@Component({
  selector: 'app-sal-deduction',
  templateUrl: './sal-deduction.component.html',
  styleUrls: ['./sal-deduction.component.css'],
})
export class SalDeductionComponent {
  employe: any;

  submitted: boolean;
  employee: any;
  productDialog: boolean;
  taxTaypes: TaxTayes[];
  SelectedCity1: TaxTayes;
  selectedCity1: any;
  selectedAmount: any;
  selectedLOP: any;
  date3: Date;
  invalidDates: Date[];
  constructor(private employeeSer: EmployeeService) {
    this.taxTaypes = [
      { name: 'SELECT TAX' },
      { name: 'INCOME TAX' },
      { name: 'INSURANCE' },
      { name: 'LOP' },
      { name: 'PROVIDENT FUND' },
    ];
  }
  ngOnInit() {
    this.employeeSer.getEmp().subscribe((data) => {
      //console.log(data);
      this.employee = data;
    });
  }
  openNew() {
    this.employe = {};
    this.submitted = false;
    this.productDialog = true;
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
  save() {
    this.submitted = true;

    this.SelectedCity1;
    this.selectedCity1;
    this.selectedAmount;
    this.selectedLOP;
    this.date3;
  }
}
