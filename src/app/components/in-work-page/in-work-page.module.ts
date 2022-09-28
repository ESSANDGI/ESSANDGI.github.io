import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InWorkPageComponent } from './in-work-page.component';
import { InWorkPageRoutingModule } from './in-work-page-routing.mmodule';

@NgModule({
  declarations: [InWorkPageComponent],
  imports: [
    CommonModule,
    InWorkPageRoutingModule,
  ],
  providers: [],
  exports: [InWorkPageComponent]
})
export class InWorkPageModule { }