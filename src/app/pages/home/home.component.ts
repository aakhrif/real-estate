import { Component } from '@angular/core';
import { Property } from '../../../app/interfaces/Property';
import { Store } from '@ngrx/store';
import { selectPropertiesLoaded } from 'src/app/state/properties.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  propertiesResults: Array<Property> = [];
  propertiesLoaded$ = this.store.select(selectPropertiesLoaded);
  constructor(private store: Store) {}
}
