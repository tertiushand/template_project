import { Type } from '@angular/core';

export class WizardStepComponent {
  constructor(
    public component: Type<any>,
    public data?: any
  ) {}
}

export class WizardStep {
  constructor(
    public title: string,
    public body: WizardStepComponent,
    public submit?: any
  ){}
}