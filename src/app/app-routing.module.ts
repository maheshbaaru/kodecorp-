import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { CreateDesignationComponent } from './create-designation/create-designation.component';
import { CreateTaxtypeComponent } from './create-taxtype/create-taxtype.component';
import { CreateNewSalaryDetailsComponent } from './create-new-salary-details/create-new-salary-details.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SalDeductionComponent } from './sal-deduction/sal-deduction.component';
import { HomeComponent } from './home/home.component';
import { AppliedleavesComponent } from './appliedleaves/appliedleaves.component';

import { SalDeductionListComponent } from './sal-deduction-list/sal-deduction-list.component';
import { LeavesApprovelComponent } from './leaves-approvel/leaves-approvel.component';
import { EmployeeAccessComponent } from './employee-access/employee-access.component';
import { ApppledLeavesComponent } from './apppled-leaves/apppled-leaves.component';
import { EmployeesComponent } from './employees/employees.component';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { ModifypasswordComponent } from './modifypassword/modifypassword.component';
import { UpdatephotoComponent } from './updatephoto/updatephoto.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: '** ', redirectTo: '/login' },

  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      { path: 'updateprofile', component: UpdateprofileComponent },
      { path: 'salary-details', component: SalaryDetailsComponent },
      { path: 'create-designation', component: CreateDesignationComponent },
      { path: 'create-taxtype', component: CreateTaxtypeComponent },
      { path: 'profile-photo', component: ProfilePhotoComponent },
      { path: 'salDeduction', component: SalDeductionComponent },
      { path: 'appliedleaves', component: AppliedleavesComponent },
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
   
      { path: 'modifypassword', component: ModifypasswordComponent },
    ],
  },
  {path: 'create-new-salary-details',component: CreateNewSalaryDetailsComponent},
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
