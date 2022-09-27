import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './language-selector.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        LanguageSelectorComponent
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: [],
    exports: [
        LanguageSelectorComponent
    ]
})
export class LanguageSelectorModule { }