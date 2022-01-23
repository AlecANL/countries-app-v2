import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CountryCardComponent } from './components/country-card/country-card.component';
import { DropDownComponent } from './components/dropdown/dropdown.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';

import { HomePageComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropDownComponent,
    SearchComponent,
    HomePageComponent,
    CountryCardComponent,
    DetailComponent,
  ],
  exports: [],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class CountriesModule {}
