import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicPage } from 'src/app/classes/basicPage/basic-page.class';
import { LanguageService } from 'src/services/language/language.service';
import { mailFormI } from './mail-form.interface';
import c from './mail-form.content.json';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { SnackBarService } from 'src/services/snackBar/snackBar.service';

@Component({
  selector: 'mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.scss']
})
export class MailFormComponent extends BasicPage<mailFormI> {

  protected MAIL_SERVICE_ID: string = 'service_w73uoxo';
  protected TEMPLATE_ID : string = 'template_rqoei2a';
  protected EMAIL_JS_PUBLIC_KEY : string = 'FW0TWmmuOYLr5m6yx';

  emailPattern : RegExp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');  

  mailForm : FormGroup = new FormGroup({
    name : new FormControl(''),
    mail : new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
    message : new FormControl('', [Validators.required]) 
  })

  constructor(
    protected languageService: LanguageService,
    protected router: Router,
    protected snackBarService : SnackBarService
  ) {
    super();
    this.all_languages_content = c;
  }

  send(e : Event){
    e.preventDefault();
    emailjs.sendForm(this.MAIL_SERVICE_ID, this.TEMPLATE_ID, e.target as HTMLFormElement, this.EMAIL_JS_PUBLIC_KEY )
      .then (
        (result: EmailJSResponseStatus) => {
          this.openSnackBar(this.content.mailSendOk);
          this.resetForm();
        }, 
        (error) => {
          this.openSnackBar(this.content.mailSendKo);
          console.error(error);
        }
      );
  }

  private resetForm(){
    this.mailForm.reset();
          Object.keys(this.mailForm.controls).forEach((key) => {
            const control = this.mailForm.controls[key];
            control.setErrors(null);
        });
  }

}
