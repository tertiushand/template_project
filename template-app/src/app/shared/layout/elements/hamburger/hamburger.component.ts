import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, 
  keyframes
} from '@angular/animations';

import { States } from "../../../variables/states.variable";
var states = new States();

@Component({
  selector: 'hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
  animations: [
    trigger('hamburgerState', [
      state(states.inactive, style({
        transform: 'rotate(360deg)'
      })),
      state(states.active,   style({
        transform: 'rotate(360deg)'
      })),
      transition(states.inactive+' => '+states.active, animate('500ms ease-in', keyframes([
        style({transform: 'scale(1.2) rotate(-180deg)', offset: 0.5}),
        style({transform: 'scale(1) rotate(-180deg)', offset: 1.0})
      ]))),
      transition(states.active+' => '+states.inactive, animate('500ms ease-out', keyframes([
        style({transform: 'scale(1.2) rotate(180deg)', offset: 0.5}),
        style({transform: 'scale(1) rotate(180deg)', offset: 1.0})
      ])))
    ])
  ]
})
export class HamburgerComponent implements OnInit {
  constructor() { }

  @Output() toggled = new EventEmitter();
  private currentState: string = states.active;

  ngOnInit() {
  }

  onToggle() {
    this.currentState = this.currentState === states.active?states.inactive:states.active;
    this.toggled.emit(this.currentState);
  }

}
