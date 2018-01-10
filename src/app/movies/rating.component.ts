import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rating-component',
  template: `
    <div class="rating">
      User rating:
      <div>
        <i class="star material-icons"
          *ngFor="let rating of ratings; let i = index"
          [ngClass]="{'star--colored': rating}"
          (click)="handleClick(i)"
      >star</i>
      </div>
    </div>
  `,
  styles: ['.star { cursor: pointer; } .star--colored{ color: #ee6e73;}']
})
export class RatingComponent implements OnInit, OnChanges {
  private ratings = [ false, false, false, false, false ];

  @Input() rating;
  @Output() ratingChange = new EventEmitter();

  handleClick(index) {
    this.ratingChange.emit(index + 1);
  }

  ngOnInit() {
    this.updateRating(this.rating);
  }

  ngOnChanges(changes) {
    this.updateRating(changes.rating.currentValue);
  }

  updateRating(newRating) {
    if (newRating < 1) {
      newRating = 1;
    } else if (newRating > 5) {
      newRating = 5;
    }
    this.ratings = this.ratings.map((r, i) => i <= (newRating - 1));
  }
}
