import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

const SERVICE_2_ID = "6gIX9oVvJdaGgZg9fZGJ5e";
const CONTENT_TYPE_ID = "ourService";

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {
  protected entry$ : any;
  protected entries$: any;
  

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.entry$ = this.contentfulService.getEntry(SERVICE_2_ID);
    const query = {
      content_type: CONTENT_TYPE_ID
    };
    this.entries$ = this.contentfulService.getEntries(query);
  }
}
