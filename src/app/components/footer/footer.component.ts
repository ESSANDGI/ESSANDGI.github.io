import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicPage } from 'src/app/classes/basicPage/basic-page.class';
import { LanguageService } from 'src/services/language/language.service';
import { SnackBarService } from 'src/services/snackBar/snackBar.service';
import { FooterI } from './footer.interface';
import c from './footer.content.json';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BasicPage<FooterI>{

  constructor(
    protected languageService: LanguageService,
    protected router: Router,
    protected snackBarService: SnackBarService,
  ) {
    super();
    this.all_languages_content = c;
   }

}
