import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFieldModule } from './dynamic-field/dynamic-field.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFieldModule
  ],
  declarations: [DynamicFormComponent],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule { }
