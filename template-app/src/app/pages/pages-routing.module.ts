import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NormalComponent } from './normal/normal.component';
import { DemoFormsComponent } from './demo-forms/demo-forms.component';
import { DemoChartsComponent } from './demo-charts/demo-charts.component';
import { DemoTablesComponent } from './demo-tables/demo-tables.component'

export interface MyRoute extends Route {
  data?: {
    label?: string;
    icon?: string;
  };
  subnavState?: string;
}

export const routes: Array<MyRoute> = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: 'demos',
    children: [
      {
        path: 'normal',
        component: NormalComponent,
        data: {label:"Average Page"}
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
    ],
    subnavState: 'inactive'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
