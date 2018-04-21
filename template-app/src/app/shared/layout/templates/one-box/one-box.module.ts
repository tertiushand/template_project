import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneBoxComponent } from './one-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OneBoxComponent],
  exports: [OneBoxComponent]
})
export class OneBoxModule { }
