import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar.component';
import { SidebarConfig } from "./sidebar.config";
import { States } from '../../variables/states.variable';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SidebarConfig,
    States
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule { }
