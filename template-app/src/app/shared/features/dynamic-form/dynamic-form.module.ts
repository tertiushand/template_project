import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFieldModule } from './dynamic-field/dynamic-field.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    DynamicFieldModule
  ],
  declarations: [DynamicFormComponent],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule { }
