import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import { IPost } from './../post/post-model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PostsService {
  options;
  domain = "http://localhost:3000/";

  constructor(private authService: AuthService, private http: Http) { }

  createAuthenticationHeaders() {
    this.authService.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authService.authToken
      })
    });
  }

  createPost(post): Observable<IPost> {
    this.createAuthenticationHeaders();
    return this.http.post(this.domain + 'posts/newpost', post, this.options)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
