import { Component, Input } from '@angular/core';

import { ICountry } from '@core/models/country.interface';

@Component({
  selector: 'country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css'],
})
export class CountryCardComponent {
  @Input() country!: ICountry;
}
