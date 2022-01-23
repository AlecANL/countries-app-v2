import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  handleFilter<T = any>(listToFiltered: T[]) {
    if (!Array.isArray(listToFiltered)) {
      console.error('Whoops. This method needed a iterable object Array.');
      return [];
    }
    const handle = {
      base: (filterBy: string, value: string) =>
        listToFiltered.filter((n: any) => n[filterBy] === value),
    };
    return handle;
  }
}
