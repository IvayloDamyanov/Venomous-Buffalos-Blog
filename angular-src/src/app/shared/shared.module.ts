import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UnderlineDirective } from './directives/underline.directive';

import { TrimPipe } from './pipes/trim.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [CapitalizePipe, TrimPipe, FooterComponent, NavbarComponent, UnauthorizedComponent, UnderlineDirective],
  exports: [
    CommonModule,
    CapitalizePipe,
    TrimPipe,
    NavbarComponent,
    FooterComponent,
    UnauthorizedComponent,
    UnderlineDirective
  ]
})
export class SharedModule { }
