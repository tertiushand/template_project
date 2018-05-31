import { Component, Output, EventEmitter } from '@angular/core';
import { StateMapConfig } from './state-map.config';

@Component({
  selector: 'state-map',
  templateUrl: './state-map.component.html',
  styleUrls: ['./state-map.component.scss']
})

export class StateMapComponent {
  @Output() onMapClick = new EventEmitter<any>();
  private stateMapConfig = StateMapConfig;

  passState(event: any) {
    this.onMapClick.emit(event['state-abbr']);
  }

}
