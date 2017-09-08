import { SinglePostComponent } from './post/single-post/single-post.component';
import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component'; // to be fixed with proper module loading
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

import { SharedModule } from './shared/shared.module';

import { SearchModule } from './search/search.module';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path:'register', component: RegisterComponent },
    { path:'login', component: LoginComponent },
    { path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
    { path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    // contact module test
   {path:'contact', loadChildren:'./contact/contact.module#ContactModule'},
    // testing single Post view
    { path: 'singlePost', component: SinglePostComponent },
    { path: '**', component: UnauthorizedComponent, pathMatch: 'full' }
    // {path: '**', component: NotFoundComponent}
];

// const appRoutes : Routes = [
//   {path:'', component: HomeComponent},
//   {path:'register', component: RegisterComponent},
//   {path:'login', component: LoginComponent},
//   {path:'profile', component: ProfileComponent},
//   //{path: '**', component: NotFoundComponent},
// ]

@NgModule({
  imports: [RouterModule.forRoot(routes), SearchModule.forRoot()],
  exports: [RouterModule]
})

export class AppRoutingModule {}
