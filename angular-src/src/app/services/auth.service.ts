import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'; // in order to use more methods for observables
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/users/register', user, options)
    // for deploy
    // return this.http.post('users/register', user, options)
    .map(res => res.json());
  }

  editUser(username, newUserObject) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const data = {
      username: username,
      newUserObject: newUserObject
    };

    return this.http.post('http://localhost:3000/users/edit', data, {headers: headers})
    // for deploy
    // return this.http.post('users/edit', data, {headers: headers})
    .map(res => res.json());
  }

  // search(query : Object){
  //   let headers = new Headers();
  //   this.loadToken(); // we grab the token from local storage
  //   headers.append('Authorization', this.authToken);
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get('http://localhost:3000/search', {headers: headers, search: query })
  //     .map(res => res.json());
  // }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
    // For deploy
    // return this.http.post('users/authenticate', user, {headers: headers})
    .map(res => res.json());
  }

  getProfile() {
    const headers = new Headers();
    this.loadToken(); // we grab the token from local storage
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
    // For deploy
    // return this.http.get('users/profile', {headers: headers})
    .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  // fetches the token and stores it in local storage
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // check if the token has not expired
  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
