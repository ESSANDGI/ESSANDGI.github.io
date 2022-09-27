import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SgButtonModule } from 'src/app/partials/sg-button/sg-button.module';
import { MailFormComponent } from './mail-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {TextFieldModule} from '@angular/cdk/text-field';
import { SnackBarService } from 'src/services/snackBar/snackBar.service';

@NgModule({
  declarations: [MailFormComponent],
  imports: [
    CommonModule,
    SgButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    TextFieldModule
  ],
  providers: [SnackBarService],
  exports: [MailFormComponent]
})
export class MailFormModule { }