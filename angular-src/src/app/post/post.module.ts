import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostRoutingModule } from './post-routing.module';
import { SinglePostComponent } from './single-post/single-post.component';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostRoutingModule
  ],
  declarations: [
    SinglePostComponent,
    CreatePostComponent
]
})
export class PostModule { }
