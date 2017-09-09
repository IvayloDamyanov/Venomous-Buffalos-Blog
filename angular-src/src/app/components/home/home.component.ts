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
    // private localStorage: LocalStorage,
    private findService : FindService,
    private router: Router) { }

  ngOnInit() {
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
