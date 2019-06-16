import { Component, OnInit, isDevMode } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alrich';

  constructor(public sanitizer: DomSanitizer) {
  
   }
  
   ngOnInit() {

  }

}
