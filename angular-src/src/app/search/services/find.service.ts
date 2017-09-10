import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'; // in order to use more methods for observables
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class FindService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }

  search(query : Object){
    let headers = new Headers();
    this.loadToken(); // we grab the token from local storage
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/search', {headers: headers, search: query })
      .map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
}
