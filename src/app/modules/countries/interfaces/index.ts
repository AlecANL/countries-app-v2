import { ICountry } from '@core/models/country.interface';
export interface IDropDownState {
  isOpen: boolean;
}

export interface IHomeState {
  countries: ICountry[];
  searched_countries: ICountry[];
  isError: null | boolean;
  error: null | string;
  isLoading: boolean;
}

export interface ICountryState {
  country: ICountry | null | undefined;
  isError: boolean | null;
  error: null | string;
  isLoading: boolean;
}
