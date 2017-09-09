import { TextBolderPipe } from './faq/text-bolding.pipe';
import { FormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  imports: [
    CommonModule, ContactRoutingModule,FormsModule
  ],
  declarations: [ContactUsComponent, AboutUsComponent, FaqComponent,TextBolderPipe]
})
export class ContactModule { }