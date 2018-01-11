import { Component } from '@angular/core';

@Component({
  selector: 'home-component',
  template: `
    <div class="row container valign-wrapper">
      <a class="blue waves-effect waves-light btn" routerLink="/movie">Add new</a>
    </div>
    <div class="row container valign-wrapper">
      <movie-list>
      </movie-list>
    </div>
  `
})
export class HomeComponent {
}
