import { AuthService } from './../../services/auth.service';
import { ValidateService } from './../../services/validate.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  confirmpassword: String;

  constructor(private validateService : ValidateService, 
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router: Router
            ) { }

  ngOnInit() {

  }
  
  onRegisterSubmit(){
      const user = {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
        confirmpassword: this.confirmpassword
      }

  // Apply the validations

      // Validate Email
  if(!this.validateService.validateEmail(user.email)) {
    this.flashMessage.show('Please enter a valid email', {classes: ['alert','alert-danger'], timeout: 3000})
    return false;
  }
  // Required fields
    if(!this.validateService.validateRegister(user)) {
    this.flashMessage.show('Please fill in all fields', {classes: ['alert', 'alert-danger'], timeout: 3000})
    return false;
  }

  // Register user
  this.authService.registerUser(user).subscribe(data => {
    if(data.success) {
      this.flashMessage.show('You have registered successfully', {classes: ['alert' ,'alert-success'], timeout: 3000});
      this.router.navigate(['/login'])
    } else {
      this.flashMessage.show('The registration was not successful', {classes: ['alert' ,'alert-danger'], timeout: 3000});
      this.router.navigate(['/register'])
    }
  })
    }

}
