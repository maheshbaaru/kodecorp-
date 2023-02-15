import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FpasswordComponent } from './fpassword/fpassword.component';

const routes: Routes = [

  { path: '** ', component: LoginComponent },



  {
    path: 'navbar', component: NavbarComponent,
    children: [
      { path: 'updateprofile', component: UpdateprofileComponent },
    ]
  },

  {
    path: 'login', component: LoginComponent
  },
  { path: 'fpassword', component: FpasswordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
