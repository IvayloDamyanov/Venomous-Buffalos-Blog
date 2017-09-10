import { TextBolderPipe } from '../pipes/text-bolding.pipe';
import { FormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { FaqViewComponent } from './faq-view/faq-view.component';



@NgModule({
  imports: [
    CommonModule, ContactRoutingModule,FormsModule
  ],
  declarations: [ContactUsComponent, AboutUsComponent, FaqComponent,TextBolderPipe,
    FaqViewComponent
]
})
export class ContactModule { }