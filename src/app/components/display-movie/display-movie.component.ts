import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../../interfaces/IMovie';
import axios from 'axios';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ShowMovieDialogComponent} from '../show-movie-dialog/show-movie-dialog.component';
import {Configuration} from '../../../environments/configuration';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {

  @Input() movie: IMovie;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openPopup(id: string): void {
    axios.get(`${Configuration.baseAPIurl}?apikey=${Configuration.apiKey}&i=${id}`).then((response) => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.height = '750px';
      dialogConfig.width = '500px';
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = false;
      dialogConfig.data = response.data;
      this.dialog.open(ShowMovieDialogComponent, dialogConfig);
    });
  }
}
