import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


interface LeaveType {
  name: string;
}

@Component({
  selector: 'app-create-leave',
  templateUrl: './create-leave.component.html',
  styleUrls: ['./create-leave.component.css']
})
export class CreateLeaveComponent {
  leaveTypes: LeaveType[];
  empForm: FormGroup;
  
 constructor(private _fb:FormBuilder){
  this.leaveTypes = [
    { name: 'Casual' },
    { name: 'Sick' },
    { name: 'Earned' },
    { name: 'Compensation' },
    { name: 'Optional' },
  ];
  this.empForm=this._fb.group({
    name:'',
    Salary:'',
    LastRevisedDate:'',
    NextRevisedDate:''
  })
 }

 onFormSubmit(){
  if(this.empForm.valid){
    console.log(this.empForm.value)
  }
}

}
