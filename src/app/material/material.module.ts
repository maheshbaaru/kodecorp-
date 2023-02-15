import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule,} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatIconModule,MatMenuModule,MatToolbarModule,MatSlideToggleModule
  ],
  exports: [
    MatIconModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
MatTabsModule

  ]
})
export class MaterialModule { }
