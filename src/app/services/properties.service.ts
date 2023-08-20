import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Property {
  name: string,
  description: string,
  location: {
    city: string
    neighborhood: string,
    postalCode: number
  },
  price: number,
  bedrooms: number,
  bathrooms: number,
  size: number,
  amenities: Array<string>,
  images: Array<string>,
  contact: {
    name: string,
    email: string,
    phone: string
  }
}

interface Search {
  location: {
    city: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http: HttpClient) { }

  public searchProperties(search: Search): Observable<Property> {
    const url = "/api/properties/search"
    return this.http.post<Property>(url, search);
  }
}
