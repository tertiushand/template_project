import { Component, OnInit, ElementRef, Input, HostListener } from '@angular/core';
import { Chart } from 'chart.js';

import { Styling } from '../../../variables/styling.variable'

@Component({
  selector: 'bar-chart',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  private ctx: HTMLCanvasElement;
  private barChart: Chart;

  @Input() labels: Array<string>;
  @Input() description: string;
  @Input() data: Array<number>;
  @Input() ratio?: Array<number>;

  constructor(
      private element: ElementRef,
      private styling: Styling
    ) {}

  ngOnInit() {
    this.ctx = this.element.nativeElement.querySelector("#barChart");
    this.barChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
            labels: this.labels,
            datasets: [{
                label: this.description,
                data: this.data,
                backgroundColor: this.styling.chartColors
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    this.ratio = [this.barChart.chart.canvas.parentNode.parentNode.parentNode.clientWidth,this.barChart.chart.canvas.parentNode.clientHeight];
    this.setChartSize(this.barChart);
  }  

  setChartSize(barChart) {
    if (barChart) {
        barChart.chart.canvas.parentNode.style.height = this.barChart.chart.canvas.parentNode.parentNode.parentNode.clientHeight+'px';
        barChart.chart.canvas.parentNode.style.width = this.barChart.chart.canvas.parentNode.parentNode.parentNode.clientWidth+'px';
    }
  }

}
