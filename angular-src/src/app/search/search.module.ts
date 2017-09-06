import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  imports: [CommonModule, SearchRoutingModule],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class SearchModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SearchModule
    }
  }
}
