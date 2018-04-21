import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-demo-charts',
  templateUrl: './demo-charts.component.html',
  styleUrls: ['./demo-charts.component.scss']
})
export class DemoChartsComponent implements OnInit {
  private ctx: HTMLCanvasElement;
  private bobChart: Chart;
  private barData: Array<number> = [20,35,4,26];
  private barLabels: Array<string> = ["yes", "no", "maybe", "later"];
  private barRatio: Array<number> = [900,200];
  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

}
