import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    MatIconModule
  ],
  providers: [],
  exports: [AboutMeComponent]
})
export class AboutMeModule { }