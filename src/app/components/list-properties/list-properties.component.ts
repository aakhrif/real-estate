import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProperties } from 'src/app/state/properties.selectors';

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.css']
})
export class ListPropertiesComponent {

  properties$ = this.store.select(selectProperties);
  
  constructor(private store: Store) {}
}
