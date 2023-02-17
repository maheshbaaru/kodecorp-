import { Component } from '@angular/core';
// interface Shifts {
//   name: string;
// }
// interface Roles{
//   name:string;
// }
@Component({
  selector: 'app-create-new-employee',
  templateUrl: './create-new-employee.component.html',
  styleUrls: ['./create-new-employee.component.css']
})
export class CreateNewEmployeeComponent {
   roles:string[];
 // roles:Roles[];
   selectedrole:any;
  //Shifts:Shifts[];
  Shifts:string[];
  constructor(
    ) { }
    ngOnInit(){
    // this.Shifts = [
    //   {name:'selectShift'},
    //   {name:'First Shift' },
    //   {name:'Second Shift'}
    // ];
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
    ]
    // this.roles=[
    //   {name:   "Accountant"},
    //   {name: "InVoiceSpecialist"},
    //   {name: "HRExecutive"},
    //   {name: "QALead"},
    //   {name: "SoftWareDeveloper"},
    //   {name: "SoftwareEngineer"},
    //   {name: "SoftwareTrainee"},
    //   {name: "QALead"},
    //   {name: "QA Trainee"},
    //   {name: "Tech Lead"},
    //   {name: "UI Designer"},
    //   {name: "Sr.SoftwareDeveloper"},
    //   {name: "Project Manager"},
    //   {name: "Sr.SoftwareEngineer"},
    //   {name: "Sr.QA"}
    //    ];
       this.selectedrole;
  }


}
