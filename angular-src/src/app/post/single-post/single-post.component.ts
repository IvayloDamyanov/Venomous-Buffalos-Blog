import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
 posts = [{
   user:'Todor',
   title:'TElerik',
   text:`Hi! I'm New York Times best selling author Nomadic Matt. If you're overwhelmed by all the travel information on the web, sign up here to get proven 
   step by step tips and tricks that will save you time, money, and have you traveling sooner!`,
  pic:'../../../assets/imageOne.jpeg'
 },
 {
  user:'Anya',
  title:'Pernik',
  text:`Hi! I'm New York Times best selling author Nomadic Matt. If you're overwhelmed by all the travel information on the web, sign up here to get proven 
  step by step tips and tricks that will save you time, money, and have you traveling sooner!`,
  pic:"../../../assets/logo-blog.png"

}]
  constructor() { }

  ngOnInit() {
  }

}
