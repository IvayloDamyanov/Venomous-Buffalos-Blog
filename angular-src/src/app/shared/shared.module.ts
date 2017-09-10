import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UnderlineDirective } from './directives/underline.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [FooterComponent, NavbarComponent, UnauthorizedComponent, UnderlineDirective],
  exports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    UnauthorizedComponent,
    UnderlineDirective
  ]
})
export class SharedModule { }
