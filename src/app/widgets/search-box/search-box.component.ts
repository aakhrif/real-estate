import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  userInput$ = new Subject<string>();
  someTemporaryResults = {};
  constructor(private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.userInput$
      .pipe(debounceTime(500))
      .subscribe((value) => {
        console.log('User input: ', value);
        this.propertiesService.searchProperties({location: {city: value}})
          .subscribe((res) => {
            console.log('za3ma ', res);
            this.someTemporaryResults = res;
          });
      })
  }

  onKey(event: any) {
    const inputValue = event.target.value;
    this.userInput$.next(inputValue);
  }
}
