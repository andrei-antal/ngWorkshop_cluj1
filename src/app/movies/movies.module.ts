import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MovieComponent } from './movie.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  exports: [ MovieComponent ],
  declarations: [ MovieComponent ],
  providers: [],
})
export class MoviesModule { }
