import { Component } from '@angular/core';
import { IDropDownState } from '@modules/countries/interfaces';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropDownComponent {
  private _state: IDropDownState = {
    isOpen: false,
  };

  countries: string[] = [
    'all',
    'africa',
    'oceania',
    'europe',
    'asian',
    'american',
  ];

  get isOpen() {
    return this._state.isOpen;
  }

  toggle() {
    this._state = {
      ...this._state,
      isOpen: !this._state.isOpen,
    };
  }

  handleFilterCountry(country: string) {
    this._state = { ...this._state, isOpen: false };
    console.log(country);
  }
}
