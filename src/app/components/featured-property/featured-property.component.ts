import { Component } from '@angular/core';
import { Property } from 'src/app/interfaces/Property';

@Component({
  selector: 'app-featured-property',
  templateUrl: './featured-property.component.html',
  styleUrls: ['./featured-property.component.css']
})
export class FeaturedPropertyComponent {
  protected property: Property;
  slider = false;

  constructor() {
    this.property = {
      id: 12,
      name: "Poolhouse",
      description: "Awesome and very beautiful Property Penthouse",
      images: [
        "image2.jpg"
      ],
      location: {
        city: "miami"
      }
    };
  }
}
