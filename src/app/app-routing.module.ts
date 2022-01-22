import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomePageComponent } from '@modules/countries/pages/home/home.component';
import { DetailComponent } from './modules/countries/pages/detail/detail.component';

const routes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'country/:id',
    component: DetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
