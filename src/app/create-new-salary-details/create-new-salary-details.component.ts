import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import namesData from 'src/assets/data/names.json';
interface EmployeeName {
  Name: string

}

@Component({
  selector: 'app-create-new-salary-details',
  templateUrl: './create-new-salary-details.component.html',
  styleUrls: ['./create-new-salary-details.component.css']
})
export class CreateNewSalaryDetailsComponent {
  names: EmployeeName[];
  empForm: FormGroup;
  
  
constructor(private _fb:FormBuilder){
  this.names = namesData
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
