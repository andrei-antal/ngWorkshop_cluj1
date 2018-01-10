import { Component } from '@angular/core';

@Component({
  selector: 'movie-component',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  public title = 'Star Wars: The Last Jedi';
  public year = 2017;
  public duration = '152 min';
  public genre = 'Action, Adventure, Fantasy';
  public plot = 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.';
  public poster = 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg';

  public isLiked = false;
  public isSaved = false;
  public comment = '';

  like() {
    this.isLiked = !this.isLiked;
  }

  clear() {
    this.comment = '';
  }

  save() {
    this.isSaved = true;
  }

  getWords() {
    if (this.comment === '') {
      return 0;
    }
    return this.comment.trim().split(' ').length;
  }
}
