import { PostModule } from './post/post.module';
import { AuthService } from './services/auth.service';
import { PostsService } from './services/posts.service';
import { ValidateService } from './services/validate.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './guards/auth.guard';
import { UserDetailsModule } from './user-details/user-details.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { SearchModule } from './search/search.module';



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
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    UserDetailsModule,
    PostModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    SharedModule,
    AlertModule.forRoot(),
    FlashMessagesModule,
    SearchModule.forRoot(),
  ],
  providers: [ValidateService, AuthService, AuthGuard, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
