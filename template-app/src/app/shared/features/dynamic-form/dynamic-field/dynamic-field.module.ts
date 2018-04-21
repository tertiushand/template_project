import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFieldComponent } from './dynamic-field.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [DynamicFieldComponent],
  exports: [DynamicFieldComponent]
})
export class DynamicFieldModule { }
