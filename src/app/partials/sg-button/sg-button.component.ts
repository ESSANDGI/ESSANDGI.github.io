import { Component, Input, OnInit } from '@angular/core';
import { BUTTON_COLORS } from './sg-button.interface';

@Component({
  selector: 'sg-button',
  templateUrl: './sg-button.component.html',
  styleUrls: ['./sg-button.component.scss']
})
export class SgButtonComponent {

  @Input() title! : string;
  @Input() color : BUTTON_COLORS = 'black';
  @Input() bgColor : BUTTON_COLORS = 'white';
  @Input() matIcon? : string;
  @Input() disabled : boolean = false;
  constructor() { }

}
