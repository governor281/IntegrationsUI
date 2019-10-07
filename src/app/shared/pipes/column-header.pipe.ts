import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnHeader',
  pure: true
})
export class ColumnHeaderPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    return value.replace(/([A-Z])/g, ' $1').trim(); //RegExp.Replace(value, '[A-Z]', ' $0').Trim();
  }
}
