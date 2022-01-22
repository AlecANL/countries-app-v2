import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { listCountriesMocks } from '@core/mocks/list-countries.mock';
import { ICountry } from '@core/models/country.interface';

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
    const fakeCountry = this.countriesMocks.find((c) => c.cca2 === query);
    const data = await this._loadCountries(fakeCountry);
    this.state = { ...this.state, country: { ...data }, isLoading: false };
  }

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(({ id }) => {
      this._getCountries(id);
    });
  }

  deepInObj(obj: any): any {
    if (obj === null || obj === undefined) {
      console.warn('cannot operate. this prop returns undefine or null');
      return;
    }
    if (typeof obj === 'object') {
      const keys: any[] = Object.keys(obj);
      return keys.reduce((values: any[], currentKey: string) => {
        const value = obj[currentKey];
        if (typeof value === 'object') {
          return [...values, this.deepInObj(value)];
        }
        console.log(values);
        return [...values, value];
      }, []);
    }
  }
}
