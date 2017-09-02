


import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
//import { StaticElementModule } from './static-element/static-element.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './static-element/footer/footer.component';
import { AboutUsComponent } from './static-element/about-us/about-us.component';
import { ContactUsComponent } from './static-element/contact-us/contact-us.component';
// wrong import import { NavbarComponent } from './components/src/app/components/navbar/navbar.component';

// Here we add the routes - later to rewrite with lasy loading

const appRoutes : Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'profile', component: ProfileComponent},
  {path: 'aboutUs',component: AboutUsComponent},
  {path: 'contactUs',component: ContactUsComponent}
  //{path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
