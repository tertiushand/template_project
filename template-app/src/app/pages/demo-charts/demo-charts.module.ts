import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoChartsComponent } from './demo-charts.component';
import { OneBoxModule } from '../../shared/layout/templates/one-box/one-box.module';
import { BarModule } from '../../shared/features/charts/bar/bar.module';
import { PieModule } from '../../shared/features/charts/pie/pie.module';

@NgModule({
  imports: [
    CommonModule,
    OneBoxModule,
    BarModule,
    PieModule
  ],
  declarations: [DemoChartsComponent]
})
export class DemoChartsModule { }
