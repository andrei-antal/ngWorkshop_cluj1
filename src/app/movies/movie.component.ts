import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  @Input() index;

  @Output() saveComment = new EventEmitter();
  @Output() likeMovie = new EventEmitter();

  like() {
    this.likeMovie.emit(this.index);
  }

  save() {
    this.saveComment.emit(this.index);
  }

  getWords(newComment) {
    if (newComment.trim() === '') {
      return 0;
    }
    return newComment.trim().split(' ').length;
  }
}
