import { Component } from '@angular/core';
import { Property } from '../../../app/interfaces/Property';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  propertiesResults: Array<Property> = [];
}
