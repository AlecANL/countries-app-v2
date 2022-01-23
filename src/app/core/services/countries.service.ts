import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICountry } from '../models/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _baseUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAllCountries() {
    const params = new HttpParams();
    params.set(
      'fields',
      'name,capital,region,subregion,flags,borders,population,languages,cca2,currencies,tld'
    );
    return this.http.get<ICountry[]>(`${this._baseUrl}/all`, { params });
  }

  getCountry(code: string) {
    const params = new HttpParams();
    params.set(
      'fields',
      'name,capital,region,subregion,flags,borders,population,languages,cca2,currencies,tld'
    );

    return this.http.get<ICountry[]>(`${this._baseUrl}/alpha/${code}`, {
      params,
    });
  }
}
