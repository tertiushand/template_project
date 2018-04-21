import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from './classes/field-base';
import { FieldControlService } from './services/field-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [FieldControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: FieldBase<any>[] = [];
  @Input() buttonText: string;
  @Output() buttonPress = new EventEmitter();
  form: FormGroup;
 
  constructor(private fcs: FieldControlService) {  }
 
  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields);
  }
 
  onSubmit() {
    this.buttonPress.emit(this.form.value);
  }

}
