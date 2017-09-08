import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FindService } from './../../search/services/find.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  constructor(
    private authService: AuthService,
    private findService : FindService,
    private router: Router) { }

  ngOnInit() {
  }

  onSearchSubmit(query: String) {
    const search = {
    }

    this.findService.search(query).subscribe(data => {
      if (data.success) {
        // console.log("Data success" + JSON.stringify({ data: data}, null, 4));
        localStorage.add('searchResults', data);
        this.router.navigate(['search']);
      } else {
        console.log("Find service failed");
      }
    })

    // this.authService.authenticateUser(user).subscribe(data => {
    //   if(data.success) {
    //     this.authService.storeUserData(data.token, data.user);
    //     this.flashMessage.show( 'You are now logged in', 
    //     {classes: ['alert', 'alert-success'], timeout: 3000});
    //     this.router.navigate(['dashboard']);
    //   } else {
    //     this.flashMessage.show(data.msg,
    //       {classes: ['alert' ,'alert-danger'], timeout: 3000});
    //     this.router.navigate(['login']);
    //   }
    // });

         
  }
}
