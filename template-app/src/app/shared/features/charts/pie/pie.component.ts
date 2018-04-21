import { Component, OnInit, ElementRef, Input, HostListener } from '@angular/core';
import { Chart } from 'chart.js';

import { Styling } from '../../../variables/styling.variable'

@Component({
  selector: 'pie-chart',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  private ctx: HTMLCanvasElement;
  private pieChart: Chart;
  private ratio: Array<number>;

  @Input() labels: Array<string>;
  @Input() description: string;
  @Input() data: Array<number>;

  constructor(
      private element: ElementRef,
      private styling: Styling
    ) {}

  ngOnInit() {
    this.ctx = this.element.nativeElement.querySelector("#pieChart").getContext('2d');
    this.pieChart = new Chart(this.ctx, {
        type: 'pie',
        data: {
            labels: this.labels,
            datasets: [{
                label: this.description,
                data: this.data,
                backgroundColor: this.styling.chartColors
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false

        }
    });
    this.ratio = [this.pieChart.chart.canvas.parentNode.parentNode.parentNode.clientWidth,this.pieChart.chart.canvas.parentNode.parentNode.parentNode.clientHeight];
    this.setChartSize(this.pieChart);
  }  

  setChartSize(pieChart) {
    if (pieChart) {
        let smallest = this.pieChart.chart.canvas.parentNode.parentNode.parentNode.clientWidth<=this.pieChart.chart.canvas.parentNode.parentNode.parentNode.clientHeight?this.pieChart.chart.canvas.parentNode.parentNode.parentNode.clientWidth:this.pieChart.chart.canvas.parentNode.parentNode.parentNode.clientHeight;
        pieChart.chart.canvas.parentNode.style.height = smallest+'px';
        pieChart.chart.canvas.parentNode.style.width = smallest+'px';
    }
  }

}
