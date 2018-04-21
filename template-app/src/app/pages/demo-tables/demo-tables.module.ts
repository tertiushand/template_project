import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoTablesComponent } from './demo-tables.component';
import { TableModule } from '../../shared/features/table/table.module'

@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  declarations: [DemoTablesComponent]
})
export class DemoTablesModule { }
