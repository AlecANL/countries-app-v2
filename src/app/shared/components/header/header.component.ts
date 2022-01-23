import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  onToggleTheme() {
    console.log(this.themeService.theme);
    this.themeService.toggleTheme();
  }

  ngOnInit(): void {}

  get themeClass() {
    return '';
    // return this.themeService.classTheme;
  }
}
