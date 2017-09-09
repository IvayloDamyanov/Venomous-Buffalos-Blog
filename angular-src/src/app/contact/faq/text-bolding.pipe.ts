import {Pipe,PipeTransform} from '@angular/core'

@Pipe({name: 'textBolder'})
export class TextBolderPipe implements PipeTransform {

  transform(value: string): string {
        
        return '<b>' + value + '</b>';
  }
}