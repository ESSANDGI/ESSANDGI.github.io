import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SgButtonComponent } from './sg-button.component';
import { MatIconModule } from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [SgButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  providers: [],
  exports: [SgButtonComponent]
})
export class SgButtonModule { }