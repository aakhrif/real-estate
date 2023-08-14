import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { TabbedComponent } from './widgets/tabbed/tabbed.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    TabbedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
