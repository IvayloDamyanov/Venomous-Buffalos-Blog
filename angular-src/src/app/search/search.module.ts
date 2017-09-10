import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { SearchRoutingModule } from './search-routing.module';
import { FindService } from './services/find.service';
import { TimePeriodPipe } from './shared/time-period.pipe';

@NgModule({
  imports: [CommonModule, SearchRoutingModule],
  declarations: [ListComponent, TimePeriodPipe],
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
