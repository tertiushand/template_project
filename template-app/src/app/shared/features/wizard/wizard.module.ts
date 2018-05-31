import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardDirective } from './wizard.directive';
import { WizardStep }      from './wizard-step';
import { WizardStepInterface } from './wizard-step.interface';
import { WizardComponent } from './wizard.component';
import { LoadingModule } from '../../assets/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    LoadingModule
  ],
  declarations: [
    WizardComponent,
    WizardDirective
  ],
  exports: [WizardComponent]
})
export class WizardModule { }
