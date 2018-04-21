import { Component, OnInit } from '@angular/core';

import { DemoFormsService } from './demo-forms.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-demo-forms',
  templateUrl: './demo-forms.component.html',
  styleUrls: ['./demo-forms.component.scss'],
  providers: [DemoFormsService]
})
export class DemoFormsComponent implements OnInit {

  fields: any[];
  display: string;

  constructor(service: DemoFormsService) {
    this.fields = service.getQuestions();
  }

  ngOnInit() {

  }

  onSave(values: any) {
    this.display = JSON.stringify(values);
  }

}
