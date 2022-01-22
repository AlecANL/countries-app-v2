import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomePageComponent } from '@modules/countries/pages/home/home.component';
import { CountryIdPageComponent } from '@modules/countries/pages/[id]/[id].component';

const routes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'country/:id',
    component: CountryIdPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
