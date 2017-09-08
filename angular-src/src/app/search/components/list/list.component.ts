import { FindService } from './../../services/find.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  query: String = "testQuery";

  constructor(private router: Router, private findService: FindService) { }

  ngOnInit() {
    this.findService.search(this.query).subscribe(data => {
      if (data.success){
        console.log("list component search success " + data);
      } else {
        console.log("list component search fail " + data);
      }
    });
  }

  onSearch(){
    this.findService.search(this.query).subscribe(data => {
      if (data.success){
        console.log("list component search success");
      } else {
        console.log("list component search fail");
      }
    });

  }

}
