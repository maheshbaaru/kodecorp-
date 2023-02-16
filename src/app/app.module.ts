import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalarydisplyComponent } from './salarydisply/salarydisply.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { LoginComponent } from './login/login.component';

import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { HomeComponent } from './home/home.component';
import { PrimengModule } from './primeng/primeng.module';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SalarydisplyComponent,
    UpdateprofileComponent,
    LoginComponent,
    NavbarComponent,
    FpasswordComponent,
    HomeComponent,
    PaySlipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
