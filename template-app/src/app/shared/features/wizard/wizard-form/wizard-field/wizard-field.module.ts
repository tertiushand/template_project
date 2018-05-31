import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WizardFieldComponent } from './wizard-field.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [WizardFieldComponent],
  exports: [WizardFieldComponent]
})
export class WizardFieldModule { }
