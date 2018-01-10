import { Component, OnInit } from '@angular/core';

import { MoviesService } from './movies.service';

@Component({
  selector: 'movie-list',
  template: `
    <div class="movie-list">
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
  `
})
export class MovieListComponent implements OnInit {
  public movies;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }

  handleSaveComment(index) {
    this.movies[index].commentSaved = true;
  }

  handleDeleteMovie(index) {
    console.log('here', index);
    this.moviesService.deleteMovie(index);
    this.movies = this.moviesService.getMovies();
  }

  handleLikeMovie(index) {
    this.movies[index].isLiked = !this.movies[index].isLiked;
  }
}
