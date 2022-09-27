import { Component, OnInit } from '@angular/core';
import { BasicPage } from 'src/app/classes/basicPage/basic-page.class';
import { LanguageService } from 'src/services/language/language.service';
import { HomeI } from './home.interface';
import c from './home.content.json';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/services/snackBar/snackBar.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BasicPage<HomeI> {

  constructor(
    protected languageService: LanguageService,
    protected router : Router,
    protected snackBarService : SnackBarService
  ) {
    super();
    this.all_languages_content = c;
  }

}
