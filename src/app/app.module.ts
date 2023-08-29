import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './widgets/search/search.component'
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { TabbedComponent } from './widgets/tabbed/tabbed.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListPropertiesComponent } from './components/list-properties/list-properties.component';
import { StoreModule } from '@ngrx/store';
import { propertiesReducer } from './state/properties.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ImageGalleryComponent } from './widgets/image-gallery/image-gallery.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ContentCardComponent } from './widgets/content-card/content-card.component';
import { FeaturedPropertyComponent } from './components/featured-property/featured-property.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { LoadingSpinnerComponent } from './widgets/loading-spinner/loading-spinner.component';
import { SnackbarComponent } from './widgets/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    TabbedComponent,
    SearchBoxComponent,
    ListPropertiesComponent,
    ImageGalleryComponent,
    OurServicesComponent,
    ContentCardComponent,
    FeaturedPropertyComponent,
    LoadingSpinnerComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ properties: propertiesReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
