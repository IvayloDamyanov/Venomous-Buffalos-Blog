import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

import { SharedModule } from './shared/shared.module';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path:'register', component: RegisterComponent },
    { path:'login', component: LoginComponent },
    { path:'profile', component: ProfileComponent },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
