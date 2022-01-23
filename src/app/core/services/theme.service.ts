import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _state = {
    isDarkMode: false,
  };

  private _isThemeDark: Subject<boolean> = new Subject();

  isThemeDark = this._isThemeDark.asObservable();

  classTheme: string = 'dark';

  handleMediaChange(mq: MediaQueryListEvent) {}

  toggleTheme() {
    this._isThemeDark.next(!this._state.isDarkMode);
    this._state.isDarkMode = !this._state.isDarkMode;
    if (!this._state.isDarkMode) {
      console.log('dark');
      this.classTheme = 'dark';
    } else {
      this.classTheme = 'light';
      console.log('light');
    }
  }

  constructor() {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(mq);
    mq.addEventListener('change', this.handleMediaChange);
    this._state = { ...this._state, isDarkMode: mq.matches };
  }
}
