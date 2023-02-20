import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateprofileComponent } from './profilecomponents/updateprofile/updateprofile.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { CreateDesignationComponent } from './create-designation/create-designation.component';
import { CreateTaxtypeComponent } from './create-taxtype/create-taxtype.component';
import { CreateNewSalaryDetailsComponent } from './create-new-salary-details/create-new-salary-details.component';
import { ProfilePhotoComponent } from './profilecomponents/profile-photo/profile-photo.component';

import { SalDeductionComponent } from './sal-deduction/sal-deduction.component';
import { HomeComponent } from './home/home.component';

import { SalDeductionListComponent } from './sal-deduction-list/sal-deduction-list.component';
import { LeavesApprovelComponent } from './leaves-approvel/leaves-approvel.component';
import { EmployeeAccessComponent } from './employee-access/employee-access.component';
import { ApppledLeavesComponent } from './apppled-leaves/apppled-leaves.component';
import { EmployeesComponent } from './employees/employees.component';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { ChangepasswordComponent } from './profilecomponents/changepassword/changepassword.component';
import { CreateNewEmployeeComponent } from './create-new-employee/create-new-employee.component';
import { UpdatephotoComponent } from './profilecomponents/updatephoto/updatephoto.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeLeavesComponent } from './employee-leaves/employee-leaves.component';




const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: '** ', redirectTo: '/login' },

  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      { path: 'updateprofile', component: UpdateprofileComponent },
      { path: 'salary-details', component: SalaryDetailsComponent },
      {path: 'create-new-salary-details',component: CreateNewSalaryDetailsComponent, },
      { path: 'create-designation', component: CreateDesignationComponent },
      { path: 'changepassword', component: ChangepasswordComponent },
      { path: 'create-taxtype', component: CreateTaxtypeComponent },
      { path: 'profile-photo', component: ProfilePhotoComponent },
      { path: 'salDeduction', component: SalDeductionComponent },
    
      { path: 'salary-details', component: SalaryDetailsComponent },
      { path: 'create-designation', component: CreateDesignationComponent },
      { path: 'create-taxtype', component: CreateTaxtypeComponent },
      { path: 'profile-photo', component: ProfilePhotoComponent },

      { path: 'DeductionList/:id', component: SalDeductionListComponent },

      { path: 'leavesApprov', component: LeavesApprovelComponent },
      { path: 'access', component: EmployeeAccessComponent },
      { path: 'apply', component: ApppledLeavesComponent },
      { path: 'Employees', component: EmployeesComponent },
      { path: 'paySlip', component: PaySlipComponent },
      {
        path: 'create-new-salary-details',
        component: CreateNewSalaryDetailsComponent,
      },
      {path:'cretenewemployee',component:CreateNewEmployeeComponent},
   {path:'updatephoto',component:UpdatephotoComponent},
      
      {path:'updateemployee',component:UpdateEmployeeComponent},
      {path:'employee-leaves',component:EmployeeLeavesComponent}
    ],
  },

  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
