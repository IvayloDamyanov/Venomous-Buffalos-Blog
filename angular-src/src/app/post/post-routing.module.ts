import { CreatePostComponent } from './create-post/create-post.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'singlePost', component: SinglePostComponent },
  { path: 'newpost', component: CreatePostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
