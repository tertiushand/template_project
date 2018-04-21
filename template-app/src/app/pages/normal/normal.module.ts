import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalComponent } from './normal.component';
import { OneBoxModule } from '../../shared/layout/templates/one-box/one-box.module';

@NgModule({
  imports: [
    CommonModule,
    OneBoxModule
  ],
  declarations: [NormalComponent]
})
export class NormalModule { }
