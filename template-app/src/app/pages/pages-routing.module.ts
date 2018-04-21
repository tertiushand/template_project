import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NormalComponent } from './normal/normal.component';
import { DemoFormsComponent } from './demo-forms/demo-forms.component';
import { DemoChartsComponent } from './demo-charts/demo-charts.component';
import { DemoTablesComponent } from './demo-tables/demo-tables.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: 'normal',
    component: NormalComponent
  },{
    path: 'demo-form',
    component: DemoFormsComponent
  },{
    path: 'demo-charts',
    component: DemoChartsComponent
  },{
    path: 'demo-tables',
    component: DemoTablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
