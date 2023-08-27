import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, debounceTime } from 'rxjs';
import { PropertiesService } from 'src/app/services/properties.service';
import { PropertiesApiActions } from 'src/app/state/properties.actions';
import { selectProperties } from 'src/app/state/properties.selectors';
import * as _ from 'lodash';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  userInput$ = new Subject<string>();
  properties$ = this.store.select(selectProperties);

  constructor(private propertiesService: PropertiesService, private store: Store) { }
  
  ngOnInit(): void {
    this.userInput$
      .pipe(debounceTime(500))
      .subscribe((value) => {
        this.searchProperties(value);
    });
  }

  searchProperties(value: string): void {
    this.propertiesService.searchProperties({location: {city: value}})
      .subscribe((properties) => {
        this.store.dispatch(PropertiesApiActions.retrievedPropertiesSearchResults({ properties }));
      });
  }

  onKey(event: any) {
    let searchValue = event.target.value;
    let validatedSearchValue = this.validateSearchInput(searchValue);
    if (validatedSearchValue) {
      this.userInput$.next(validatedSearchValue);
    }
  }

  validateSearchInput = (inputValue: string): string | null => {
    if(!_.isEmpty(inputValue)) {
      return inputValue.toLowerCase();
    }
    return null;
  }
}
