import { Component } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  Shifts:string[];
  roles:string[];
  constructor(){

  }
  ngOnInit(){
    this.Shifts=["selectShift","FirstShift","SecondShift"];
    this.roles=[ "Accountant",
    "InVoiceSpecialist",
     "HRExecutive",
     "QALead",
     "SoftWareDeveloper",
     "SoftwareEngineer",
     "SoftwareTrainee",
    "QALead",
     "QA Trainee",
     "Tech Lead",
    "UI Designer",
     "Sr.SoftwareDeveloper",
    "Project Manager",
     "Sr.SoftwareEngineer",
     "Sr.QA"
    ];
  }
}
