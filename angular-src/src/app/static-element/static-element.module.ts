
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import{StaticElementRoutingModule} from './static-element-routing.module'

@NgModule({
  imports: [
    CommonModule,
    StaticElementRoutingModule
  ],
  declarations: [FooterComponent, AboutUsComponent, ContactUsComponent],
  exports:[FooterComponent]
})
export class StaticElementModule { }
