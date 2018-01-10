import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MovieListComponent } from './movieList.component';
import { MovieComponent } from './movie.component';
import { RatingComponent } from './rating.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  exports: [ MovieListComponent ],
  declarations: [ MovieComponent, MovieListComponent, RatingComponent ],
  providers: [],
})
export class MoviesModule { }
