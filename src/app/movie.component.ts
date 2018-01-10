import { Component } from '@angular/core';

@Component({
  selector: 'movie-component',
  template: `
    <div>
      <div>{{title}}</div>
      <div>{{year}}</div>
      <div>{{duration}}</div>
      <div>{{genre}}</div>
      <div>{{plot}}</div>
      <img [src]="poster">
    </div>
  `
})
export class MovieComponent {
  public title = 'Star Wars: The Last Jedi';
  public year = 2017;
  public duration = '152 min';
  public genre = 'Action, Adventure, Fantasy';
  public plot = 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.';
  public poster = 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg';
}
