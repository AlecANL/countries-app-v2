import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DropDownComponent } from './components/dropdown/dropdown.component';
import { SearchComponent } from './components/search/search.component';

import { HomePageComponent } from './pages/home/home.component';
import { CountryIdPageComponent } from './pages/[id]/[id].component';

@NgModule({
  declarations: [
    DropDownComponent,
    SearchComponent,
    HomePageComponent,
    CountryIdPageComponent,
  ],
  exports: [],
  imports: [CommonModule],
})
export class CountriesModule {}
