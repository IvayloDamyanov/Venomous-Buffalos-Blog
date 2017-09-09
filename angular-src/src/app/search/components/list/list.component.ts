import { FindService } from './../../services/find.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  resultsArray : Array<Object>;

  constructor(
    private router: Router, 
    private findService: FindService) { }

  ngOnInit() {
    this.resultsArray = JSON.parse(localStorage.getItem('postsSearchResults'));
    // console.log(this.resultsArray[0]);
    
  }

  onSearch(){
    
  }

  

}
