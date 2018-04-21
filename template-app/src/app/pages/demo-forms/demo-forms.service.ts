import { Injectable }       from '@angular/core';

import { FieldDropdown } from '../../shared/features/dynamic-form/classes/field-dropdown';
import { FieldBase }     from '../../shared/features/dynamic-form/classes/field-base';
import { FieldTextbox }  from '../../shared/features/dynamic-form/classes/field-textbox';

@Injectable()
export class DemoFormsService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: FieldBase<any>[] = [

      new FieldDropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new FieldTextbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new FieldTextbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}