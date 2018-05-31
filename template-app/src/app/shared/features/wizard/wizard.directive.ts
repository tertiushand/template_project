import { Directive, ViewContainerRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[step-host]'
})
export class WizardDirective {
    @Output() toWizardValues = new EventEmitter();
    @Output() errorMessage: EventEmitter<string> = new EventEmitter();
    @Output() ready: EventEmitter<boolean> = new EventEmitter();
    @Output() loading: EventEmitter<boolean> = new EventEmitter();
    @Output() moveForward: EventEmitter<boolean> = new EventEmitter();
    @Output() clicked: EventEmitter<boolean> = new EventEmitter();
    
    constructor(public viewContainerRef: ViewContainerRef) { }
}