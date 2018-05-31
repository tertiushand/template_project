import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WizardFormComponent } from './wizard-form.component';
import { WizardFieldModule } from './wizard-field/wizard-field.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WizardFieldModule
  ],
  declarations: [WizardFormComponent],
  exports: [WizardFormComponent],
  entryComponents: [WizardFormComponent]
})
export class WizardFormModule { }
