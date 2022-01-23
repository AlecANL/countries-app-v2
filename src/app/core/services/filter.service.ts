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
          return n[filterBy] === value;
        }),
      name: (name: string) => {
        const x: any = list[0];
        console.log(x['name']['common'].toLowerCase().includes('p'));
        return list.filter((n: any) =>
          n['name']['common'].toLowerCase().includes(name)
        );
      },
    };
  }
}
