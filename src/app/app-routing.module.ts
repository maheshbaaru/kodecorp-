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
import { SalDeductionListComponent } from './sal-deduction-list/sal-deduction-list.component';
import { LeavesApprovelComponent } from './leaves-approvel/leaves-approvel.component';
import { EmployeeAccessComponent } from './employee-access/employee-access.component';

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
      { path: 'DeductionList/:id', component: SalDeductionListComponent },
      { path: 'back', redirectTo: 'SalDeductionListComponent' },
      { path: 'leavesApprov', component: LeavesApprovelComponent },
      { path: 'access', component: EmployeeAccessComponent },
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'changepassword', component: ChangepasswordComponent },
  {
    path: 'create-new-salary-details',
    component: CreateNewSalaryDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
