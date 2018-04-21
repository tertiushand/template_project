import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() hamburgerState = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateHamburger(state: string) {
    this.hamburgerState.emit(state);
  }

}
