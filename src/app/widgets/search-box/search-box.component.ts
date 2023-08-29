import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, catchError, debounceTime, of } from 'rxjs';
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
    this.propertiesService.searchProperties({ location: { city: value } })
      .pipe(
        catchError((error) => {
          console.error('An error occured: ', error);
          // prevent site from breaking 
          return of([]);
        })
      )
      .subscribe((properties) => {
        this.store.dispatch(PropertiesApiActions.retrievedPropertiesSearchResults({ properties }));

        if (_.isEmpty(properties)) {
          this.displayErrorMessageToUser('There was a problem fetching data. Please try again later.')
        }
      });
  }

  private displayErrorMessageToUser(message: string): void {
    // Implement a way to display the error message to the user.
    // This could involve showing a snackbar, modal, or some other UI element.
  }

  onKey(event: any) {
    let searchValue = event.target.value;
    let validatedSearchValue = this.validateSearchInput(searchValue);
    if (validatedSearchValue) {
      this.userInput$.next(validatedSearchValue);
    }
  }

  validateSearchInput = (inputValue: string): string | null => {
    if (!_.isEmpty(inputValue)) {
      return inputValue.toLowerCase();
    }
    return null;
  }
}
