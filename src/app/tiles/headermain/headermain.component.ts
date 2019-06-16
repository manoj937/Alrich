import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headermain',
  templateUrl: './headermain.component.html',
  styleUrls: ['./headermain.component.scss']
})
export class HeadermainComponent implements OnInit {

  menu = ['HOME', 'COURSES', 'OUR STORY', 'CONTACT US'];

  constructor() { }

  ngOnInit() {
  }

}
