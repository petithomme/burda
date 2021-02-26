import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { DisplayMovieComponent } from './components/display-movie/display-movie.component';
import { ShowMovieDialogComponent } from './components/show-movie-dialog/show-movie-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DisplayMovieComponent,
    ShowMovieDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  entryComponents: [ShowMovieDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
