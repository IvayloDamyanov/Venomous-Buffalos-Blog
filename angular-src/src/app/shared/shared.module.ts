import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [FooterComponent, NavbarComponent, UnauthorizedComponent],
  exports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    UnauthorizedComponent
  ]
})
export class SharedModule { }
