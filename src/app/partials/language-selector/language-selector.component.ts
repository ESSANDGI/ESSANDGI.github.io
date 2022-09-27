import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicPage } from 'src/app/classes/basicPage/basic-page.class';
import { LanguageService } from 'src/services/language/language.service';
import { SnackBarService } from 'src/services/snackBar/snackBar.service';
import { Lang, LanguageSelectorInt, HOW_SHOW_SELECTED_LANGUAGE, LIST_ICON_POSITION } from './language-selector.interface';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('250ms ease-out')),
      transition('default => rotated', animate('250ms ease-in'))
    ])
]
})
export class LanguageSelectorComponent extends BasicPage<LanguageSelectorInt> implements OnInit {
  
  @Input() howToShowSelectedLanguage : HOW_SHOW_SELECTED_LANGUAGE = 'name';
  @Input() listIconPosition : LIST_ICON_POSITION = 'not-show';
  @Input() showOnlyListIcons : boolean = false;

  iconState : string = 'default';
  selectedLanguage : Lang = {id: 'IT', title : 'Italiano', iconUrl : './../../../assets/icon/flags/flag-it-48.png'};

  //aggiungere qui le lingue da visualizzare nell'elenco delle opzioni
  languages : Lang[] = [
    this.selectedLanguage, 
    {id: 'EN', title : 'English', iconUrl : './../../../assets/icon/flags/flag-en-48.png'}  
  ];

  constructor(
    protected languageService: LanguageService,
    protected router : Router,
    protected snackBarService: SnackBarService
  ){
    super();
  }

  rotate() {
    this.iconState = (this.iconState === 'default' ? 'rotated' : 'default');
  }

  selectLanguage(language : Lang){
    this.selectedLanguage = language;
    this.languageService.setLanguageId(language.id);
    
  }

}
