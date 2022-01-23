import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Input() placeholder: string = '';
  @Input() ariaLabel: string = '';
  @Output() onSearchCountry: EventEmitter<string> = new EventEmitter();
  query: string = '';

  handleSubmit() {
    const value = this.query.toLowerCase().trim();
    this.onSearchCountry.emit(value);
  }
}
