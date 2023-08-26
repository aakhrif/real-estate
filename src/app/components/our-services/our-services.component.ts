import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {
  protected entry$ :any;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.entry$ = this.contentfulService.getEntry("6gIX9oVvJdaGgZg9fZGJ5e");
  }
}
