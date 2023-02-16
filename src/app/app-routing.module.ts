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

const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: '** ', component: LoginComponent },

  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      { path: 'updateprofile', component: UpdateprofileComponent },
      {path:'salary-details', component:SalaryDetailsComponent},
      {path:'create-designation',component:CreateDesignationComponent},
      {path:'create-taxtype',component:CreateTaxtypeComponent},
      {path:'profile-photo',component:ProfilePhotoComponent}
  
    ]
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'create-new-salary-details', component: CreateNewSalaryDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
