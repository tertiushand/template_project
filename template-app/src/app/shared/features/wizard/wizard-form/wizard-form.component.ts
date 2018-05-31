import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from './classes/field-base';
import { FieldControlService } from './services/field-control.service';

@Component({
  selector: 'wizard-form',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.scss'],
  providers: [FieldControlService]
})
export class WizardFormComponent implements OnInit, OnDestroy {

  fields: FieldBase<any>[];
  @Input() wizardValues: Array<Object>;
  @Input() wizardIndex: number;
  @Output() toWizardValues = new EventEmitter();
  @Output() ready: EventEmitter<boolean> = new EventEmitter();
  @Output() loading: EventEmitter<boolean> = new EventEmitter();
  @Output() clicked: EventEmitter<boolean> = new EventEmitter();
  @Output() moveForward: EventEmitter<boolean> = new EventEmitter();
  @Output() errorMessage: EventEmitter<string> = new EventEmitter();
  form: FormGroup;
 
  constructor(private fcs: FieldControlService) {  }
 
  ngOnInit() {
    this.fields = this['data'].fields;
    this.form = this.fcs.toFormGroup(this.fields);
    let thisFormValues = this.wizardValues?this.wizardValues[this.wizardIndex]:'';
    if (thisFormValues) {
      for (let i=0;i<Object.keys(thisFormValues).length;i++) {
        if (this) {
          let key = Object.keys(thisFormValues)[i];
          this.form.controls[key].setValue(thisFormValues[key]);
        }
      }
    }

    this.form.statusChanges.subscribe(valid => {
      this.ready.emit(valid === 'VALID');
    });

    this.clicked.subscribe(response => {
      if (this.form.valid) {
        this.toWizardValues.emit(this.form.value);
        this.moveForward.emit(true);
      }
    });
  }

  ngOnDestroy() {
    this.clicked.unsubscribe();
  }
}
