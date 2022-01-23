import { Injectable } from '@angular/core';

interface ISomething<T = any> {
  base: (filterBy: string, value: string) => T[];
  name: (value: string) => T[];
}

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  something<T = any>(list: T[]): ISomething<T> {
    return {
      base: (filterBy: string, value: string) =>
        list.filter((n: any) => {
          return n[filterBy].toLowerCase() === value;
        }),
      name: (name: string) => {
        return list.filter((n: any) =>
          n['name']['common'].toLowerCase().includes(name)
        );
      },
    };
  }
}
