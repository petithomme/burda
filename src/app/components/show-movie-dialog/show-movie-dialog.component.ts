import {Component, Inject, Input, OnInit} from '@angular/core';
import {IMovieFull} from '../../interfaces/IMovieFull';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-show-movie-dialog',
  templateUrl: './show-movie-dialog.component.html',
  styleUrls: ['./show-movie-dialog.component.css']
})
export class ShowMovieDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IMovieFull) { }

  ngOnInit(): void {
  }

}
