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
