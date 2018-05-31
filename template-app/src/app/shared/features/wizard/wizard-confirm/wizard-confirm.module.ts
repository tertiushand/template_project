import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WizardConfirmComponent } from './wizard-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [WizardConfirmComponent],
  exports: [WizardConfirmComponent],
  entryComponents: [WizardConfirmComponent]
})
export class WizardConfirmModule { }
