import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing-module';
import { SgButtonModule } from 'src/app/partials/sg-button/sg-button.module';
import { MailFormModule } from 'src/app/partials/mail-form/mail-form.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SgButtonModule,
    MailFormModule
  ],
  providers: [],
  exports: [HomeComponent]
})
export class HomeModule { }