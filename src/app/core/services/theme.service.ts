import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme: string = 'dark';
  private _isDarkMode: boolean = true;

  get theme() {
    return this._theme;
  }

  toggleTheme() {
    this._theme === 'light' ? this.setMode('dark') : this.setMode('light');
    // this._isDarkMode = !this._isDarkMode;
    // this.toggle(this._isDarkMode);
  }

  // toggle(isDarkMode: boolean) {
  //   this.setTheme(isDarkMode);
  //   console.log(this._theme);
  // }

  // setTheme(isDark: boolean) {
  //   if (!isDark) {
  //     this._theme = 'light';
  //     localStorage.setItem('theme', this._theme);
  //     return;
  //   }
  //   this._theme = 'dark';
  //   localStorage.setItem('theme', this._theme);
  //   return;
  // }

  handleMediaChange(mq: MediaQueryListEvent) {
    mq.matches ? this.setMode('dark') : this.setMode('light');
    // this._isDarkMode = mq.matches;
    // this.setTheme(mq.matches);
  }

  setMode(theme: string) {
    localStorage.setItem('theme', theme);
    this._theme = theme;
  }

  constructor() {
    if (localStorage.getItem('theme')) {
      this._theme = localStorage.getItem('theme') as string;
      return;
    }
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', this.handleMediaChange);
    mq.matches ? this.setMode('dark') : this.setMode('light');
    // this._isDarkMode = mq.matches;
    // this.setTheme(mq.matches);
  }
}
