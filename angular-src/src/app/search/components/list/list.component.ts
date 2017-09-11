import { FindService } from './../../services/find.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  resultsArray: Array<Object>;

  constructor(
    private router: Router,
    private findService: FindService) { }

  ngOnInit() {
    this.resultsArray = JSON.parse(localStorage.getItem('postsSearchResults'));
  }

  dateParser(input: String) {
    let output: String;
    if (input && input.length > 10) {
      output = input.slice(0, 10);
    } else {
      output = input;
    }
    return output;
  }

  imgParser(input: String) {
    let output: String;
    if (input) {
      output = input;
    } else {
      // tslint:disable-next-line:max-line-length
      output = 'https://image.slidesharecdn.com/budgettravellingrevb-150910113232-lva1-app6892/95/budget-travelling-7-638.jpg?cb=1441959126';
    }
    return output;
  }
}
