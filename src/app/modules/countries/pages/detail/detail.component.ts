import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { listCountriesMocks } from '@core/mocks/list-countries.mock';
import { ICountry } from '@core/models/country.interface';
import { CountriesService } from '@core/services/countries.service';

import { ICountryState } from '@modules/countries/interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  countriesMocks: ICountry[] = listCountriesMocks;
  private state: ICountryState = {
    country: null,
    isLoading: true,
    isError: null,
    error: null,
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  get country() {
    return { ...this.state.country };
  }

  get isLoading() {
    return this.state.isLoading;
  }

  get isError() {
    return this.state.isError;
  }

  private _loadCountries(country: ICountry | undefined): Promise<ICountry> {
    return new Promise((resolve, reject) => {
      if (!country) {
        reject('country not find');
        return;
      }
      setTimeout(() => {
        resolve(country);
      }, 3000);
    });
  }

  private async _getCountries(query: string) {
    // const fakeCountry = this.countriesMocks.find((c) => c.cca2 === query);
    // const data = await this._loadCountries(fakeCountry);
    this.countriesService.getCountry(query).subscribe((data) => {
      this.state = { ...this.state, country: { ...data[0] }, isLoading: false };
    });
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(({ id }) => {
      this._getCountries(id);
    });
  }

  deepInObj(
    obj: { [key: string | number]: {} | string | number } | undefined,
    view: 'all' | 'last' = 'last'
  ): string[] {
    if (obj === null || obj === undefined) {
      console.error(
        `whoops: cannot operate on undefined | null type. needed an object`
      );
      return [];
    }
    if (typeof obj !== 'object') {
      console.warn(
        `whoops needed an object type. and you pass a ${typeof obj} type`
      );
      return [];
    }
    const keys: string[] = Object.keys(obj);

    return keys.reduce((prev: string[], currentKey: string) => {
      const values = obj[currentKey];
      if (typeof values === 'object') {
        prev.push(...this.deepInObj(values));
        return view === 'all' ? [...prev] : [prev[prev.length - 1]];
      }
      prev.push(values as string);
      return view === 'all' ? prev : [prev[prev.length - 1]];
    }, []);
  }
}
