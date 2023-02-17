import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-access',
  templateUrl: './employee-access.component.html',
  styleUrls: ['./employee-access.component.css']
})
export class EmployeeAccessComponent {
  date3: any;
  dateRequire = true;
  invalidDates: Date;
  empAccess = [{data:'no data'}];
}
