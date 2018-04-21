import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { Styling } from '../shared/variables/styling.variable';
import { States } from '../shared/variables/states.variable';

import { HeaderModule } from '../shared/layout/header/header.module';
import { SidebarModule } from '../shared/layout/sidebar/sidebar.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { NormalModule } from './normal/normal.module';
import { DemoFormsModule } from './demo-forms/demo-forms.module';
import { DemoChartsModule } from './demo-charts/demo-charts.module';
import { DemoTablesModule } from './demo-tables/demo-tables.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderModule,
    SidebarModule,
    DashboardModule,
    NormalModule,
    DemoFormsModule,
    DemoChartsModule,
    DemoTablesModule
  ],
  providers: [
    Styling,
    States
  ],
  declarations: [PagesComponent],
  exports: [PagesComponent]
})
export class PagesModule { }
