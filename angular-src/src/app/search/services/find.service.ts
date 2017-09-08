import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'; // in order to use more methods for observables
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class FindService {

  constructor(private http:Http) { }

  search(query : String){
    console.log("Find service: " + query);
    return this.http.post('http://localhost:3000/search', query)
    .map(res => res.json());
  }
}
