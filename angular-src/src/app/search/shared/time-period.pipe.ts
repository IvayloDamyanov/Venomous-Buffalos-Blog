import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePeriod'
})
export class TimePeriodPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log(value);
  }

}
