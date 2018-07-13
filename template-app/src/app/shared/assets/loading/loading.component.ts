import { Component, Input, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})

export class LoadingComponent implements OnInit {
  public fullIconUrl: string;

  ngOnInit () {
    this.fullIconUrl = './assets/svg/loading.svg';
  }
};
