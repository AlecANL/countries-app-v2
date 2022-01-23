import { Component, OnInit } from '@angular/core';
import { IHomeState } from '@modules/countries/interfaces';

import { listCountriesMocks } from '@core/mocks/list-countries.mock';
import { ICountry } from '@core/models/country.interface';
import { FilterService } from '@core/services/filter.service';
import { CountriesService } from '@core/services/countries.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomePageComponent implements OnInit {
  state: IHomeState = {
    countries: [],
    searched_countries: [],
    isError: null,
    error: null,
    isLoading: true,
  };

  constructor(
    private filterService: FilterService,
    private countryService: CountriesService
  ) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  handleFilterByCountryName(countriesFiltered: ICountry[]) {
    this.state = { ...this.state, searched_countries: [...countriesFiltered] };
  }

  getAllCountries() {
    this.countryService.getAllCountries().subscribe((data) => {
      this.state = {
        ...this.state,
        countries: [...data],
        searched_countries: [...data],
        isLoading: false,
      };
    });
  }

  onFilterRegion(query: string) {
    if (query === 'all') {
      return this.handleFilterByCountryName([...this.state.countries]);
    }
    const x = this.filterService
      .something([...this.state.countries])
      .base('region', query);
    this.handleFilterByCountryName(x);
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

  get countriesSearched() {
    return [...this.state.searched_countries];
  }

  get isLoading() {
    return this.state.isLoading;
  }

  get isError() {
    return this.state.isError;
  }

  get error() {
    return this.state.error;
  }
}
