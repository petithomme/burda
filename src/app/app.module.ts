import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayMovieComponent } from './components/display-movie/display-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayMovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
