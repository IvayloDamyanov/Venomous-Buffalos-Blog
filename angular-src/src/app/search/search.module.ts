import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { SearchRoutingModule } from './search-routing.module';
import { FindService } from './services/find.service';

@NgModule({
  imports: [CommonModule, SearchRoutingModule],
  declarations: [ListComponent],
  providers: [FindService],
  exports: [ListComponent]
})
export class SearchModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SearchModule
    }
  }
}
