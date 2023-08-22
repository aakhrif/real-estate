import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/search/search.component'
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { TabbedComponent } from './widgets/tabbed/tabbed.component';
import { SearchBoxComponent } from './widgets/search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListPropertiesComponent } from './components/list-properties/list-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    TabbedComponent,
    SearchBoxComponent,
    ListPropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
