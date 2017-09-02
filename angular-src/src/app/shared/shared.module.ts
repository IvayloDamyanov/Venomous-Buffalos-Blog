import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [FooterComponent, NavbarComponent],
  exports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
