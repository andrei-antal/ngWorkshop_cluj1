import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DetailsComponent } from '../pages/Details.component';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: DetailsComponent,
    },
    {
      path: ':id',
      component: DetailsComponent,
    }])
  ],
  exports: [ RouterModule ],
  declarations: [DetailsComponent],
  providers: [],
})
export class DetailsModule { }
