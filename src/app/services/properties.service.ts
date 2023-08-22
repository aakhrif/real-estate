import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../interfaces/Property';
import { Search } from '../interfaces/Search';

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
