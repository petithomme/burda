import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMovieDialogComponent } from './show-movie-dialog.component';

describe('ShowMovieDialogComponent', () => {
  let component: ShowMovieDialogComponent;
  let fixture: ComponentFixture<ShowMovieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMovieDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
