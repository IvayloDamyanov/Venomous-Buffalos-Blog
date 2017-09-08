import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;

  // TODO rewrite with function
 posts = [{
   user:'Todor',
   title:'TElerik',
   text:`Hi! I'm New York Times best selling author Nomadic Matt. If you're overwhelmed by all the travel information on the web, sign up here to get proven 
   step by step tips and tricks that will save you time, money, and have you traveling sooner!`,
  pic:'../../../assets/imageOne.jpeg'
 },
 {
  user:'Anya',
  title:'Pernik',
  text:`Hi! I'm New York Times best selling author Nomadic Matt. If you're overwhelmed by all the travel information on the web, sign up here to get proven 
  step by step tips and tricks that will save you time, money, and have you traveling sooner!`,
  pic:"../../../assets/logo-blog.png"

}]

  constructor( private authService: AuthService, private router:Router ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe( profile => {
      this.user = profile.user;
    },
  err => {
    console.log(err);
    return false;
  });
  }

}
