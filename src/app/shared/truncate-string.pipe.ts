import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateString',
  standalone: true
})
export class TruncateStringPipe implements PipeTransform {

  transform(value:any, ...args:any[]): any {
    let length : number = args[0];
    if (value.length > length){
      return value.substring(0,length) + '...';
    } else { return value; }
  }

}
