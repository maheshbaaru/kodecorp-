import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leaves-approvel',
  templateUrl: './leaves-approvel.component.html',
  styleUrls: ['./leaves-approvel.component.css'],
})
export class LeavesApprovelComponent {
  employeeLeavs: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('assets/data/employeeLeaves.json').subscribe((data) => {
      this.employeeLeavs = data;
      console.log(data);
      console.log(this.employeeLeavs);
    });
  }
}
