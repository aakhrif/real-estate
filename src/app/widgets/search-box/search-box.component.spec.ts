import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponent } from './search-box.component';
import { PropertiesService } from 'src/app/services/properties.service';
import { Store } from '@ngrx/store';
import { Subject, of } from 'rxjs';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;
  let propertiesSearchService: jasmine.SpyObj<PropertiesService>;
  let store: jasmine.SpyObj<Store>;


  beforeEach(() => {
    const searchServiceSpy = jasmine.createSpyObj('PropertiesService', ['search properties']);
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch']);

    TestBed.configureTestingModule({
      declarations: [SearchBoxComponent],
      providers: [
        { provide: PropertiesService, useValue: searchServiceSpy },
        { provide: Store, useValue: storeSpy }
      ]
    });
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    propertiesSearchService = TestBed.inject(PropertiesService) as jasmine.SpyObj<PropertiesService>;
    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate user input', () => {
    const userInput$ = new Subject<string>();
    component.userInput$ = userInput$;
    userInput$.next('');
    userInput$.subscribe((EMPTYSTING) => {
      component.searchProperties(EMPTYSTING);
    });

    expect(propertiesSearchService.searchProperties).not.toHaveBeenCalled();

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
