import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicPage } from 'src/app/classes/basicPage/basic-page.class';
import { LanguageService } from 'src/services/language/language.service';
import { SnackBarService } from 'src/services/snackBar/snackBar.service';
import { InWorkPageI } from './in-work-page.interface';
import c from './in-work-page.content.json'
@Component({
  selector: 'app-in-work-page',
  templateUrl: './in-work-page.component.html',
  styleUrls: ['./in-work-page.component.scss']
})
export class InWorkPageComponent extends BasicPage<InWorkPageI>{

  constructor(
    protected languageService: LanguageService,
    protected router: Router,
    protected snackBarService: SnackBarService
  ) {
    super();
    this.all_languages_content = c;
  }


}
