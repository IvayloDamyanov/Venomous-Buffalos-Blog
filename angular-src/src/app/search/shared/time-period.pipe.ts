import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePeriod'
})
export class TimePeriodPipe implements PipeTransform {

  transform(value: any, args?: any): any {   
    const editDate : Date = new Date(value);
    const currentDate : Date = new Date();

    const timeDiff : number = Math.abs(currentDate.getTime() - editDate.getTime());
    const diffDays : number = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

    return diffDays;
  }

}
