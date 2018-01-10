import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MovieListComponent } from './movieList.component';
import { MovieComponent } from './movie.component';
import { RatingComponent } from './rating.component';

import { MoviesService } from './movies.service';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  exports: [ MovieListComponent ],
  declarations: [ MovieComponent, MovieListComponent, RatingComponent ],
  providers: [ MoviesService ],
})
export class MoviesModule { }
