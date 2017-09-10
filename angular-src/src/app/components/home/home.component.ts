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
  resultsArray : Array<Object>;
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
    // private localStorage: LocalStorage,
    private findService : FindService,
    private router: Router) { }

  ngOnInit() {
    let query = ["","",""];
    this.findService.search(query).subscribe(data => {
      if (data.success) {
        // console.log(JSON.stringify({ data: data.results}, null, 4));

        localStorage.setItem('postsSearchResults', JSON.stringify(data.results));
      } else {
        console.log("Find service failed");
      }
    });
    this.resultsArray = JSON.parse(localStorage.getItem('postsSearchResults'));
  }

  onSearchSubmit(query: String) {
    const search = {
    }

    this.findService.search(query).subscribe(data => {
      if (data.success) {
        // console.log(JSON.stringify({ data: data.results}, null, 4));

        localStorage.setItem('postsSearchResults', JSON.stringify(data.results));
        this.router.navigate(['search']);
      } else {
        console.log("Find service failed");
      }
    });
  }
}
