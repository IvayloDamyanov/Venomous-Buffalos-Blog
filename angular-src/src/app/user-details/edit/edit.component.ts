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
user: Object;
username: String;
name: String;
email: String;
description: String;
location: String;

  constructor(private authService: AuthService,
              private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private router: Router) { }

  ngOnInit() {
    // we get the currently logged user
  //     this.authService.getProfile().subscribe( profile => {
  //     this.user = profile.user;
  //     return this.user;
  //   },
  // err => {
  //   console.log(err);
  //   return false;
  // });
  }

  onEditSubmit() {
    // console.log(this.user);

    const user = {
      name: this.name,
      email: this.email,
      description: this.description,
      location: this.location
    };

    console.log(user);

    const currentUsername = window.localStorage.getItem('username');

    // this.authService.getProfile().subscribe(data => {
    //   console.log(data);
    // })

    this.authService.editUser(currentUsername, user).subscribe( data => {
      if (data.success) {
      this.flashMessage.show('You Filled in your profile successfully!', {classes: ['alert', 'alert-success'], timeout: 3000});
      this.router.navigate(['/profile']);
    } else {
      this.flashMessage.show('An error has occured. PLease try again!', {classes: ['alert', 'alert-danger'], timeout: 3000});
      this.router.navigate(['/edit']);
    }
    });
  }
}
