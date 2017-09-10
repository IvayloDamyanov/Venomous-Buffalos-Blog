import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-faq-view',
  templateUrl: './faq-view.component.html',
  styleUrls: ['./faq-view.component.css']
})
export class FaqViewComponent implements OnInit {
@Input()faqBits:{id:number,tag:string,question:string,answer:string}[]
  constructor() { }

  ngOnInit() {
  }

}
