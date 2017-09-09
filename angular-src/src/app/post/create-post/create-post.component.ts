import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPost } from '../post-model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;
  name: FormControl;
  img: FormControl;
  text: FormControl;
  dateCreated: FormControl;
  dateEdited: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
