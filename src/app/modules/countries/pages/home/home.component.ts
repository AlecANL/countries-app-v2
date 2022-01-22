import { Component } from '@angular/core';
import { IHomeState } from '@modules/countries/interfaces';

import { listCountriesMocks } from '@core/mocks/list-countries.mock';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomePageComponent {
  state: IHomeState = {
    countries: listCountriesMocks,
  };

  get countries() {
    return [...this.state.countries];
  }
}
