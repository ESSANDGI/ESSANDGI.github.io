import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LanguageSelectorModule } from 'src/app/partials/language-selector/language-selector.module';
import { MatButtonModule } from '@angular/material/button';
import { SgButtonModule } from 'src/app/partials/sg-button/sg-button.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    LanguageSelectorModule,
    MatButtonModule,
    SgButtonModule
  ],
  providers: [],
  exports: [HeaderComponent]
})
export class HeaderModule { }