import { Component } from '@angular/core';
import axios from 'axios';
import { IMovie } from './interfaces/IMovie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'burda';
  apiKey = 'b9f2830a';
  baseAPIurl = 'http://www.omdbapi.com/';
  started = false;
  moviesList = [];

  public callAPI(movieTitle: string): void {
    axios.get(`${this.baseAPIurl}?apikey=${this.apiKey}&s=${movieTitle}`)
      .then((res: any) => {
        this.moviesList = [];
        res.data.Search.forEach( (movie) => {
          this.moviesList.push( movie as IMovie);
        });
        this.started = true;
      })
      .catch((error) => {
        this.moviesList = [];
        this.started = true;
        console.log(error);
      });

  }
}
