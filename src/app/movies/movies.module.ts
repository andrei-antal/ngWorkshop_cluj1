import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MovieComponent } from './movie.component';

@NgModule({
  imports: [ BrowserModule ],
  exports: [ MovieComponent ],
  declarations: [ MovieComponent ],
  providers: [],
})
export class MoviesModule { }
