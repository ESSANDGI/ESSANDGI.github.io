import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LANGUAGE, PREDEFINED_LANGUAGE } from 'src/app/classes/basicPage/basic-page.interface';

@Injectable({
  providedIn: 'root'
})
export class LanguageService{

  // Di default setta la lingua ITALIANA assegnata alla costante PREDEFINED_LANGUAGE
  private _languageId = new BehaviorSubject<LANGUAGE>(PREDEFINED_LANGUAGE);

  constructor() { }

  get languageId() : Observable<LANGUAGE>{
    return this._languageId;
  }

  setLanguageId(id : LANGUAGE){
    this._languageId.next(id);
  }
}

