import { Component } from '@angular/core';
import { IHomeState } from '@modules/countries/interfaces';

import { listCountriesMocks } from '@core/mocks/list-countries.mock';
import { ICountry } from '@core/models/country.interface';
import { FilterService } from '@core/services/filter.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomePageComponent {
  state: IHomeState = {
    countries: listCountriesMocks,
    searched_countries: listCountriesMocks,
  };

  constructor(private filterService: FilterService) {}

  handleFilterByCountryName(countriesFiltered: ICountry[]) {
    this.state = { ...this.state, searched_countries: [...countriesFiltered] };
  }

  onFilter(query: string) {
    console.log(query);
    const x = this.filterService
      .something([...this.state.countries])
      .name(query);
    this.handleFilterByCountryName(x);
  }

  get countries() {
    return [...this.state.searched_countries];
  }
}
