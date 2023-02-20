
import { HomeComponent } from './home/home.component';
import { PrimengModule } from './primeng/primeng.module';
import { AppComponent } from './app.component';
import { SalarydisplyComponent } from './salarydisply/salarydisply.component';
import { UpdateprofileComponent } from './profilecomponents/updateprofile/updateprofile.component';
import { LoginComponent } from './login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { EditorModule } from 'primeng/editor';
import { PanelModule } from 'primeng/panel';
import { ListboxModule } from 'primeng/listbox';
import { ToolbarModule } from 'primeng/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { SalaryService } from './services/salary.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CreateDesignationComponent } from './create-designation/create-designation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTaxtypeComponent } from './create-taxtype/create-taxtype.component';
import { CreateNewSalaryDetailsComponent } from './create-new-salary-details/create-new-salary-details.component';
import { DropdownModule } from 'primeng/dropdown';
import { ProfilePhotoComponent } from './profilecomponents/profile-photo/profile-photo.component';
import { FileUploadModule } from 'primeng/fileupload';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SalDeductionComponent } from './sal-deduction/sal-deduction.component';
import { SalDeductionListComponent } from './sal-deduction-list/sal-deduction-list.component';
import { LeavesApprovelComponent } from './leaves-approvel/leaves-approvel.component';
import { EmployeeAccessComponent } from './employee-access/employee-access.component';
import { ApppledLeavesComponent } from './apppled-leaves/apppled-leaves.component';
import { EmployeesComponent } from './employees/employees.component';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { CreateNewEmployeeComponent } from './create-new-employee/create-new-employee.component';
import { ChangepasswordComponent } from './profilecomponents/changepassword/changepassword.component';
import { UpdatephotoComponent } from './profilecomponents/updatephoto/updatephoto.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeLeavesComponent } from './employee-leaves/employee-leaves.component';

@NgModule({
  declarations: [
    AppComponent,
    SalarydisplyComponent,
    UpdateprofileComponent,
    LoginComponent,
    NavbarComponent,
   ForgotpasswordComponent,
    SalaryDetailsComponent,
    CreateDesignationComponent,
    CreateTaxtypeComponent,
    CreateNewSalaryDetailsComponent,
    ProfilePhotoComponent,
    HomeComponent,
   
    SalDeductionComponent,
    SalDeductionListComponent,
    LeavesApprovelComponent,
    EmployeeAccessComponent,
    ApppledLeavesComponent,
    EmployeesComponent,
    PaySlipComponent,
    CreateNewEmployeeComponent,
    
    UpdatephotoComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    UpdateEmployeeComponent,
    EmployeeLeavesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    InputTextModule,
    CardModule,
    FileUploadModule,
    ButtonModule,
    RippleModule,
    InputMaskModule,
    EditorModule,
    PanelModule,
    ReactiveFormsModule,
    ListboxModule,
    ToolbarModule,
    MaterialModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    InputTextModule,
    ButtonModule,

    TableModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    CheckboxModule,
    InputTextModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [SalaryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
