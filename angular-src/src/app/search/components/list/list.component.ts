import { FindService } from './../../services/find.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  query: String;

  constructor(private router: Router, private findService: FindService) { }

  ngOnInit() {
  }

  onSearch(){
    this.findService.search(this.query);
  }

}
