import { ContactRoutingModule } from './contact-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  imports: [
    CommonModule, ContactRoutingModule
  ],
  declarations: [ContactUsComponent, AboutUsComponent, FaqComponent]
})
export class ContactModule { }
