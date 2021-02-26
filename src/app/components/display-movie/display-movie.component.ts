import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../../interfaces/IMovie';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {

  @Input() movie: IMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
