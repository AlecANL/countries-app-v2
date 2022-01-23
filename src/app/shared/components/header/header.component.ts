import { Component, Input } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {}

  onToggleTheme() {
    this.themeService.toggleTheme();
  }

  get themeClass() {
    return this.themeService.classTheme;
  }
}
