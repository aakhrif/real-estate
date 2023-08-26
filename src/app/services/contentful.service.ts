import { Injectable, OnInit } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment.development';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private spaceId = environment.contentfulSpaceId;
  private previewAccessToken = environment.contentfulPreviewAccessToken;
  private deliveryAccessToken = environment.contentfulDeliveryAccessToken;
  private accessToken =  environment.production ? this.deliveryAccessToken : this.previewAccessToken;
  private host = environment.production ? "cdn.contentful.com" : "preview.contentful.com";
  
  private cdaClient = createClient({
    space: this.spaceId,
    accessToken: this.accessToken,
    host: this.host
  });

  getEntry(id: string): Observable<any> {
    console.log('this.accessToken ', this.accessToken)
    console.log('cdaClient ', this.cdaClient)
    return from(
      this.cdaClient.getEntry(id)
    );
  }
}
