import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { ValidateService } from './../../services/validate.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
name: String;
email: String;
description: String;
location: String;

  constructor(private authService: AuthService,
              private validateService : ValidateService, 
              private flashMessage: FlashMessagesService,
              private router: Router) { }

  ngOnInit() {
  }

  onEditSubmit() {
    
  }

}
