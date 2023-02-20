import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employeBankInterface';
import { EmployeService } from '../employeBankService';

@Component({
  selector: 'app-create-bank-details',
  templateUrl: './create-bank-details.component.html',
  styleUrls: ['./create-bank-details.component.css']
})
export class CreateBankDetailsComponent implements OnInit{
  employeess: Employee[] | any;
  employeDetails={
    EmpIdName:'',
    ACCNO:'',
    ACCNAME:'',
    BankName:"Kotak Bank",
    EmpId:''
  }
  accno:string=''
  idArray:Employee []| any
  newArray:Employee [] |any
  
  // dont add empId ass it will get someError
  
  constructor(private employeesService:EmployeService,
    private router:Router){}
  // ngDoCheck(): void {
  //   console.log(this.employeDetails)
  // }

  resetingCreatForm(){
    this.employeDetails={
      EmpIdName:'',
      ACCNO:'',
      ACCNAME:'',
      BankName:"Kotak Bank",
      EmpId:''
    }
  }
  
  savingForm() {
    this.idArray=this.employeess.filter((emp:any)=>emp.FirstName===this.employeDetails.EmpIdName)
    .map((emp:any)=>emp.EmpId)
    this.newArray={
      "EmpId":this.idArray[0],
      "ACCNO":this.employeDetails.ACCNO,
      "BankName":"Kotak Bank",
      "ACCNAME":this.employeDetails.ACCNAME,
      "EmpIdName":this.employeDetails.EmpIdName,
    }
    this.employeesService.creatEmployeDataAndPost(this.newArray)
    this.resetingCreatForm()
  }
  
  ngOnInit() {
    this.employeesService.getEmployeeData().then(employee=>{
      
      this.employeess=employee
      
    })
  }

  // onClickBack(){
  //   this.router.navigate(['../bankDetails'])
  // }
}
