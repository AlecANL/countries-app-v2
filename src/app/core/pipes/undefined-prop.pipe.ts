import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'undefinedProps',
})
export class UndefinedProps implements PipeTransform {
  transform(prop: string | string[] | undefined, message: string) {
    if (Array.isArray(prop)) {
      return prop.length > 0 ? prop[0] : message;
    }
    if (prop === undefined) {
      return message;
    }
    return prop ? prop : message;
  }
}
