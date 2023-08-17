import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  userInput$ = new Subject<string>();

  ngOnInit(): void {
    this.userInput$
      .pipe(debounceTime(500))
      .subscribe((value) => {
        console.log('User input: ', value);
      })
  }

  onKey(event: any) {
    const inputValue = event.target.value;
    this.userInput$.next(inputValue);
  }
}
