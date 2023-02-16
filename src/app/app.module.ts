import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HomeComponent } from './home/home.component';
import { PrimengModule } from './primeng/primeng.module';
import { AppliedleavesComponent } from './appliedleaves/appliedleaves.component';
import { AppComponent } from './app.component';
import { SalarydisplyComponent } from './salarydisply/salarydisply.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SalDeductionComponent } from './sal-deduction/sal-deduction.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SalarydisplyComponent,
    UpdateprofileComponent,
    LoginComponent,
    NavbarComponent,
    ChangepasswordComponent,
    HomeComponent,
    AppliedleavesComponent,
    SalDeductionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
