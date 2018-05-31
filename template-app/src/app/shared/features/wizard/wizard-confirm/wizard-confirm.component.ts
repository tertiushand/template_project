import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { FieldBase } from '../wizard-form/classes/field-base';

@Component({
  selector: 'wizard-confirm',
  templateUrl: './wizard-confirm.component.html',
  styleUrls: ['./wizard-confirm.component.scss'],
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
export class WizardConfirmComponent {

  @Input() data: any;
  @Input() wizardValues: Array<Object>;
  @Input() wizardIndex: number;
  @Output() toWizardValues = new EventEmitter();
  @Output() ready = new EventEmitter();
  private objectKeys = Object.keys;

  label(field) {
    return field
      .replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1 $2')
      .replace(/\w\S*/g, tStr => {return tStr.charAt(0).toUpperCase() + tStr.substr(1).toLowerCase()})
  }

  ngOnInit() {
    this.ready.emit(true);
  }
}
