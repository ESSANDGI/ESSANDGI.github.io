import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicPage } from 'src/app/classes/basicPage/basic-page.class';
import { LanguageService } from 'src/services/language/language.service';
import { SnackBarService } from 'src/services/snackBar/snackBar.service';
import { AboutMeI } from './about-me.interface';
import c from './about-me.content.json';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent extends BasicPage<AboutMeI> implements OnInit {

  constructor(
    protected languageService: LanguageService,
    protected router: Router,
    protected snackBarService: SnackBarService
  ) {
    super();
    this.all_languages_content = c;
  }


}
