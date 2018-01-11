import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'details-component',
  template: `
    <div class="details">
      <a class="blue waves-effect waves-light btn" routerLink="/">Back</a>
      {{movieIndex}}
    </div>
  `
})
export class DetailsComponent implements OnInit {
  movieIndex;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => this.movieIndex = params.get('id')
    );
  }

}
