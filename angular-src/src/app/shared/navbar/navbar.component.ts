import { FindService } from './../../search/services/find.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    public findService: FindService) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out',
    {classes: ['alert', 'alert-success'], timeout: 3000});
    this.router.navigate(['/login']);
    return false;

  }

}
