import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, AboutUsComponent]
})
export class StaticElementModule { }
