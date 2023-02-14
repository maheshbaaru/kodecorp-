import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalarydisplyComponent } from './salarydisply/salarydisply.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { LoginComponent } from './login/login.component';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import {EditorModule} from 'primeng/editor';
import {PanelModule} from 'primeng/panel';
import {ListboxModule} from 'primeng/listbox';
import {ToolbarModule} from 'primeng/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/material.module';




@NgModule({
  declarations: [
    AppComponent,
    SalarydisplyComponent,
    UpdateprofileComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    RippleModule,
    InputMaskModule,EditorModule,
    PanelModule,
    BrowserAnimationsModule,
    ListboxModule,
    ToolbarModule,MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
