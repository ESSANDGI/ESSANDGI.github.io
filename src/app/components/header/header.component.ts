import { Component, OnInit } from '@angular/core';
import { BasicPage } from 'src/app/classes/basicPage/basic-page.class';
import { LanguageService } from 'src/services/language/language.service';
import { HeaderI } from './header.interface';
import c from './header.content.json';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/services/snackBar/snackBar.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BasicPage<HeaderI> implements OnInit {

  constructor(  
    protected languageService: LanguageService,
    protected router: Router,
    protected snackBarService : SnackBarService
  ){
    super();
    this.all_languages_content = c;
  }

 

}
