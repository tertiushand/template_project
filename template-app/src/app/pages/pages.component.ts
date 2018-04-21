import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Styling } from '../shared/variables/styling.variable';
import { States } from '../shared/variables/states.variable';
var styling = new Styling();
var states = new States();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [
    trigger('mainState', [
      state(states.inactive, style({
        padding: styling.header.height+' 0 0 0'
      })),
      state(states.active,   style({
        padding: styling.header.height+' 0 0 '+styling.sidebar.width
      })),
      transition(states.inactive+' => '+states.active, animate('500ms ease-in')),
      transition(states.active+' => '+states.inactive, animate('500ms ease-out'))
    ]),
    trigger('navbarState', [
      state(states.inactive, style({
        left: '-'+styling.sidebar.width
      })),
      state(states.active,   style({
        left: '0'
      })),
      transition(states.inactive+' => '+states.active, animate('500ms ease-in')),
      transition(states.active+' => '+states.inactive, animate('500ms ease-out'))
    ])
  ]
})
export class PagesComponent implements OnInit {
  private menuState = states.active;

  constructor() { }

  ngOnInit() {
  }

  updateMenu(state: string) {
    this.menuState = state;
  }

}
