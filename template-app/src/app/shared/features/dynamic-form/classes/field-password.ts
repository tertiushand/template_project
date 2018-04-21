import { FieldBase } from './field-base';

export class FieldPassword extends FieldBase<string> {
  controlType = 'password';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}