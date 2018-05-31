import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { WizardDirective } from './wizard.directive';
import { WizardStep }      from './wizard-step';
import { WizardStepInterface } from './wizard-step.interface';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  animations: [
    trigger('validationState', [
      state('valid', style({
        height: '0'
      })),
      state('invalid',   style({
        height: '*'
      })),
      transition('valid => invalid', animate('500ms ease-in')),
      transition('invalid => valid', animate('500ms ease-out'))
    ])
  ]
})
export class WizardComponent implements OnInit {
  @Input() steps: WizardStep[];
  @Input() description: string;
  currentStepIndex: number = 0;
  @ViewChild(WizardDirective) stepHost: WizardDirective;
  interval: any;
  wizardValues: Array<Object> = [];
  private currentComponentRef;
  private progressPercentage: number = 0;
  private highestStep: number = 0;
  private lastStep: number = 0;
  private ready: boolean = false;
  private loading: boolean = false;
  private errorMessage: string;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router
  ) { }

  ngOnInit() {
    this.lastStep = this.steps?this.steps.length-1:0;
    this.loadComponent(this.currentStepIndex);
  }

  loadComponent(stepNumber: number) {
    
    this.progressPercentage = ((stepNumber+1)/this.steps.length)*100;
    let step = this.steps[stepNumber].body;

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(step.component);

    let viewContainerRef = this.stepHost.viewContainerRef;
    viewContainerRef.clear();

    this.currentComponentRef = viewContainerRef.createComponent(componentFactory);
    (<WizardStepInterface>this.currentComponentRef.instance).data = step.data;
    this.instantiateValues();
    if((<WizardStepInterface>this.currentComponentRef.instance)['toWizardValues'])
      (<WizardStepInterface>this.currentComponentRef.instance)['toWizardValues'].subscribe(response => {
          this.updateWizardValues(stepNumber, response);
      });
    if ((<WizardStepInterface>this.currentComponentRef.instance)['ready'])
    (<WizardStepInterface>this.currentComponentRef.instance)['ready'].subscribe(response => {
      this.updateReady(response);
    });
    if ((<WizardStepInterface>this.currentComponentRef.instance)['loading'])
    (<WizardStepInterface>this.currentComponentRef.instance)['loading'].subscribe(response => {
      this.updateLoading(response);
    });
    if ((<WizardStepInterface>this.currentComponentRef.instance)['errorMessage'])
    (<WizardStepInterface>this.currentComponentRef.instance)['errorMessage'].subscribe(response => {
      this.updateErrorMessage(response);
    });
    if ((<WizardStepInterface>this.currentComponentRef.instance)['moveForward'])
    (<WizardStepInterface>this.currentComponentRef.instance)['moveForward'].subscribe(response => {
      this.nextStep();
    });
    this.ready = !!this.wizardValues[stepNumber];
  }

  updateWizardValues(stepNumber: number, event: any) {
    this.wizardValues[stepNumber] = typeof this.steps[stepNumber].submit === "function"?this.steps[stepNumber].submit(event): event;
   (<WizardStepInterface>this.currentComponentRef.instance)['wizardValues'] = this.wizardValues;
   (<WizardStepInterface>this.currentComponentRef.instance)['wizardIndex'] = stepNumber;
  }

  updateReady(event) {
    this.ready = event;
  }

  updateLoading(event) {
    this.loading = event;
  }

  updateErrorMessage(event) {
    this.errorMessage = event;
  }

  instantiateValues() {
    (<WizardStepInterface>this.currentComponentRef.instance)['wizardValues'] = this.wizardValues;
    (<WizardStepInterface>this.currentComponentRef.instance)['wizardIndex'] = this.currentStepIndex;
  }

  get animationState() {
    return this.errorMessage?'invalid':'valid';
  }

  changeStep(stepNumber: number){
    this.loading = false;
    this.currentStepIndex = stepNumber;
    this.loadComponent(this.currentStepIndex);
  }

  tabStep(stepNumber: number) {
    if (stepNumber <= this.highestStep)
      this.changeStep(stepNumber);
  }

  nextStep() {
    ++this.currentStepIndex;
    ++this.highestStep;
    this.changeStep(this.currentStepIndex);
  }

  nextClick() {
    (<WizardStepInterface>this.currentComponentRef.instance)['clicked'].emit(true);
  }

  backStep() {
    --this.currentStepIndex;
    this.changeStep(this.currentStepIndex);
    
  }

  finishStep() {
    this.router.navigate(['/app/dashboard']);
  }
}