import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie-component',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  @Input() title;
  @Input() year;
  @Input() duration;
  @Input() genre;
  @Input() plot;
  @Input() poster;
  @Input() isLiked;
  @Input() commentSaved;
  @Input() comment;

  like(index) {
    // this.movies[index].isLiked = !this.movies[index].isLiked;
  }

  clear(index) {
    // this.movies[index].comment = '';
  }

  save(index) {
    // this.movies[index].commentSaved = true;
  }

  getWords(newComment) {
    if (newComment === '') {
      return 0;
    }
    return newComment.trim().split(' ').length;
  }
}
