import { FaqViewComponent } from '../contact/faq-view/faq-view.component';
import {Pipe, PipeTransform} from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({ name: 'sort', pure: false})
export class ArraySortPipe {

  transform(faqBits: Array<string>, isChecked: boolean): Array<string> {
    // tslint:disable-next-line:one-line
    if (isChecked) {
    faqBits.sort((a: any, b: any) => {
              if (a.tag < b.tag) {
        return -1;
      } else if (a.tag > b.tag) {
        return 1;
      } else {
        return 0;
      }
    });
    return faqBits;
  }
    // tslint:disable-next-line:one-line
    else
    // tslint:disable-next-line:one-line
    {
      return faqBits;
    }
}}
