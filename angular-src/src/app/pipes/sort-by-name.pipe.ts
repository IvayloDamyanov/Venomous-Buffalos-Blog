import { FaqViewComponent } from '../contact/faq-view/faq-view.component';
import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name: "sort",
    pure:false
  })
  export class ArraySortPipe {
      
    transform(faqBits: Array<string>, isChecked:boolean): Array<string> {
     if(isChecked){
      faqBits.sort((a: any, b: any) => {
                if (a.tag < b.tag) {
          return -1;
        } else if (a.tag > b.tag) {
          return 1;
        } else {
          return 0;
        }
      })
      return faqBits  } 
      else 
      {return faqBits}
  }}