import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MoviesModule } from './movies/movies.module';

import { AppComponent } from './app.component';
import { DetailsComponent } from './pages/Details.component';
import { HomeComponent } from './pages/Home.component';
import { DetailsModule } from './details/details.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'movie',
        loadChildren: 'app/details/details.module#DetailsModule',
      },
      {
        path: '**',
        redirectTo: '/'
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
