import { Component, EventEmitter, Output } from '@angular/core';
import { IDropDownState } from '@modules/countries/interfaces';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropDownComponent {
  @Output() onSearchByRegion: EventEmitter<string> = new EventEmitter();
  private _state: IDropDownState = {
    isOpen: false,
  };

  countries: string[] = [
    'all',
    'africa',
    'oceania',
    'europe',
    'asia',
    'americas',
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
    const value = country.toLowerCase().trim();
    this.onSearchByRegion.emit(value);
    console.log(country);
  }
}
