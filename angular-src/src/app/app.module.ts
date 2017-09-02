import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';


// Here we add the routes - later to rewrite with lasy loading

// const appRoutes : Routes = [
//   {path:'', component: HomeComponent},
//   {path:'register', component: RegisterComponent},
//   {path:'login', component: LoginComponent},
//   {path:'profile', component: ProfileComponent},
//   //{path: '**', component: NotFoundComponent},
// ]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AppComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    SharedModule,
    // RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
