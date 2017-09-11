import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'edit', component: EditComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailsRoutingModule { }
