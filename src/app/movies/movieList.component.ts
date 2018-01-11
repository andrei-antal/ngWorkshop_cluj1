import { Component, OnInit, ViewChild } from '@angular/core';

import { MoviesService } from './movies.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounce';

@Component({
  selector: 'movie-list',
  template: `
    <div class="movie-list">
      <div class="search">
        <div class="input-field col s6">
          <input placeholder="Search" id="search_movie" #filter>
        </div>
      </div>
      <div *ngIf="movies.length>0">
        <movie-component
          *ngFor="let movie of movies; let index=index"
          [movie]="movie"
          [(rating)]="movie.rating"
          [index]="index"
          (saveComment)="handleSaveComment($event)"
          (likeMovie)="handleLikeMovie($event)"
          (deleteMovie)="handleDeleteMovie($event)"
        ></movie-component>
      </div>
      <div *ngIf="movies.length===0">
        No movies found
      </div>
    </div>
  `,
  styleUrls:['./movieList.component.css']
})
export class MovieListComponent implements OnInit {
  public movies;
  private searchTerm;
  @ViewChild('filter') filterInput;


  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
    Observable.fromEvent(this.filterInput.nativeElement, 'input')
      .debounce(() => Observable.timer(300))
      .map((event: any) => event.target.value)
      // .filter(searchTerm => searchTerm.length > 2)
      .subscribe(searchTerm => {
        this.searchTerm = searchTerm;
        this.movies = this.moviesService.filterMovies(searchTerm);
       });
  }

  handleSaveComment(index) {
    this.movies[index].commentSaved = true;
  }

  handleDeleteMovie(index) {
    this.moviesService.deleteMovie(index);
    this.movies = this.moviesService.filterMovies(this.searchTerm);
  }

  handleLikeMovie(index) {
    this.movies[index].isLiked = !this.movies[index].isLiked;
  }
}
