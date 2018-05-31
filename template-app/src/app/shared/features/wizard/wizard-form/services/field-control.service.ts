import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FieldBase } from '../classes/field-base';

@Injectable()
export class FieldControlService {

  constructor() { }
  toFormGroup(fields: FieldBase<any>[] ) {
    let group: any = {};

    fields.forEach(field => {
      let fieldValidators = [];
      if (field.required) fieldValidators.push(Validators.required);
      if (field.pattern) fieldValidators.push( Validators.pattern(field.pattern));
      if (field.email) fieldValidators.push(Validators.email);
      if (field.minLength) fieldValidators.push(Validators.minLength(field.minLength));
      if (field.maxLength) fieldValidators.push(Validators.maxLength(field.maxLength));
      if (field.min) fieldValidators.push(Validators.min(field.min));
      if (field.max) fieldValidators.push(Validators.max(field.max));
      if (field.requiredTrue) fieldValidators.push(Validators.requiredTrue);

      group[field.key] = fieldValidators.length > 0 ? new FormControl(field.value || '', fieldValidators) : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
}
