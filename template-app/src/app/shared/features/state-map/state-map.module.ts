import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { TranslateModule } from 'ng2-translate';
import { StateMapComponent } from './state-map.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TranslateModule
  ],
  declarations: [
    StateMapComponent
  ],
  exports: [
    StateMapComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class StateMapModule {}
