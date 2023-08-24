import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, debounceTime } from 'rxjs';
import { PropertiesService } from 'src/app/services/properties.service';
import { PropertiesApiActions } from 'src/app/state/properties.actions';
import { selectProperties } from 'src/app/state/properties.selectors';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  userInput$ = new Subject<string>();
  someTemporaryResults = {};

  constructor(private propertiesService: PropertiesService, private store: Store) { }

  properties$ = this.store.select(selectProperties);
  
  ngOnInit(): void {
    this.userInput$
      .pipe(debounceTime(500))
      .subscribe((value) => {
        this.propertiesService.searchProperties({location: {city: value}})
          .subscribe((properties) => {
            this.store.dispatch(PropertiesApiActions.retrievedPropertiesSearchResults({ properties }));
          });
    });
  }

  onKey(event: any) {
    let searchValue = event.target.value;
    let validatedSearchValue = this.validateSearchInput(searchValue);
    // console.log('validatedSearchValue ', validatedSearchValue)
    if (validatedSearchValue) {
      console.log('validatedSearchValue ', validatedSearchValue)
      this.userInput$.next(validatedSearchValue);
    }
  }

  validateSearchInput = (inputValue: string): string | null => {
    //To Do use lodash
    if(inputValue.length > 0) {
      return inputValue.toLowerCase();
    }
    return null;
  }
}
