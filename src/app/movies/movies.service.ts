import { Movie } from './Movie';
import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
  private movies = [
    new Movie(
      'Star Wars:The Last Jedi',
      2017,
      '152 min',
      'Action, Adventure, Fantasy',
      'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg',
      false,
      false,
      '',
      1,
    ),
    new Movie(
      'Black Swan',
      2010,
      '108 min',
      'Drama, Thriller',
      'A committed dancer wins the lead role in a production of Tchaikovskys \"Swan Lake\" only to find herself struggling to maintain her sanity.',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg',
      false,
      false,
      '',
      1,
    ),
    new Movie(
      'Fight Club',
      1999,
      '139 min',
      'Drama',
      'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      false,
      false,
      '',
      1,
    ),
    new Movie(
      'The Godfather: Part II',
      1974,
      '202 min',
      'Crime, Drama',
      'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      false,
      false,
      '',
      1,
    ),
  ];

  getMovies() {
    return this.movies;
  }

  deleteMovie(index) {
    this.movies = [
      ...this.movies.slice(0, index),
      ...this.movies.slice(index + 1)
    ];
  }

}
