import { Component } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'countries-app-v2';

  constructor(private themeService: ThemeService) {}

  get classTheme() {
    return this.themeService.classTheme;
  }
}
