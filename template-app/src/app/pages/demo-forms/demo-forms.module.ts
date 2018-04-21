import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoFormsComponent } from './demo-forms.component';
import { OneBoxModule } from '../../shared/layout/templates/one-box/one-box.module';
import { DynamicFormModule } from '../../shared/features/dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormModule,
    OneBoxModule
  ],
  declarations: [DemoFormsComponent],
  exports: [DemoFormsComponent]
})
export class DemoFormsModule { }
