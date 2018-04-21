import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { FieldBase } from '../classes/field-base';

@Component({
  selector: 'dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss'],
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
export class DynamicFieldComponent {

  @Input() fieldBase: FieldBase<any>;
  @Input() form: FormGroup;

  get animationState() {
    return this.showValidation?'invalid':'valid';
  }

  get showValidation() {
    return !this.isValid && !this.pristine;
  }

  get pristine() {
    return this.form.controls[this.fieldBase.key].pristine;
  }

  get isValid() {
    return this.form.controls[this.fieldBase.key].valid;
  }

  get requiredInvalid() {
    return this.form.controls[this.fieldBase.key].errors?this.form.controls[this.fieldBase.key].errors.required:null;
  }

  get patternInvalid() {
    return this.form.controls[this.fieldBase.key].errors?this.form.controls[this.fieldBase.key].errors.pattern:null;
  }

  get emailInvalid() {
    return this.form.controls[this.fieldBase.key].errors?this.form.controls[this.fieldBase.key].errors.email:null;
  }

  get minLengthInvalid() {
    return this.form.controls[this.fieldBase.key].errors?this.form.controls[this.fieldBase.key].errors.minlength?
      this.form.controls[this.fieldBase.key].errors.minlength.requiredLength:null:null;
  }

  get maxLengthInvalid() {
    return this.form.controls[this.fieldBase.key].errors?this.form.controls[this.fieldBase.key].errors.maxlength?
      this.form.controls[this.fieldBase.key].errors.maxlength.requiredLength:null:null;
  }

  get minInvalid() {
    return this.form.controls[this.fieldBase.key].errors?this.form.controls[this.fieldBase.key].errors.min?
      this.form.controls[this.fieldBase.key].errors.min.requiredLength:null:null;
  }

  get maxInvalid() {
    return this.form.controls[this.fieldBase.key].errors?this.form.controls[this.fieldBase.key].errors.max?
      this.form.controls[this.fieldBase.key].errors.max.requiredLength:null:null;
  }

  get requiredTrueInvalid() {
    return this.form.controls[this.fieldBase.key].errors?this.form.controls[this.fieldBase.key].errors.requiredTrue:null;
  }

  get label() {
    return this.fieldBase.label?this.fieldBase.label:this.fieldBase.key
      .replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1 $2')
      .replace(/\w\S*/g, tStr => {return tStr.charAt(0).toUpperCase() + tStr.substr(1).toLowerCase()})
  }

}
