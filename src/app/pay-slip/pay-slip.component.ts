import { Component } from '@angular/core';

@Component({
  selector: 'app-pay-slip',
  templateUrl: './pay-slip.component.html',
  styleUrls: ['./pay-slip.component.css']
})
export class PaySlipComponent {
date!:Date;
constructor(){
 
}
ngOnInit(){

}
Alert(){
  if(!this.date){
    alert('please select month and year');
  }
  else{
    alert('Employee does not have bank account or salary');
  }
}
}
