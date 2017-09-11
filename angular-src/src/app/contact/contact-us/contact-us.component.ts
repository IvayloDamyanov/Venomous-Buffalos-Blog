import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
email;
question;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(commentForm: NgForm) {
    console.log('success');
  }
}

