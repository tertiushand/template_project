import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { SidebarConfig } from "./sidebar.config";
import { States } from '../../variables/states.variable';
import { Nav } from './sidebar.type';
import { routes, MyRoute } from '../../../pages/pages-routing.module'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('subnavState', [
      state('inactive', style({
        height: '0'
      })),
      state('active',   style({
        height: '*'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class SidebarComponent implements OnInit {

  private routes: Array<MyRoute> = Object.create(routes);

  constructor(
    private navInfo: SidebarConfig,
    private router: Router,
    private states: States
  ) { }

  ngOnInit() {

  }

  updateSubnav(index: number, state?: string) {
    this.navInfo.config[index].subnavState = state?state:this.navInfo.config[index].subnavState === this.states.active?this.states.inactive:this.states.active;
  }

  updateRouteState(index: number) {
    if (this.routes[index].subnavState)
      this.routes[index].subnavState = this.routes[index].subnavState === this.states.active?this.states.inactive:this.states.active;
  }

  handleNav(nav: Nav, index?: number) {
    if (nav.route) {
      this.router.navigate(['/'+nav.route]);
    } else if (nav.uri) {
      window.open(nav.uri, "_blank");
    } else if (nav.subnav) {
      this.updateSubnav(index);
    }
  }

  handleRouteNav(path?: string, index?: number) {
    if (path)
      this.router.navigate(['/'+path]);
    if (index)
      this.updateRouteState(index);
  }

  wordCase(change: string) {
    return change.replace(/-/g, " ").replace(/\b[a-z]/g,function(f){return f.toUpperCase();});
  }
}
