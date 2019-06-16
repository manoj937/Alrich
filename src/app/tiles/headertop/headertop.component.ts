import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headertop',
  templateUrl: './headertop.component.html',
  styleUrls: ['./headertop.component.scss']
})
export class HeadertopComponent implements OnInit {

  items: string[] = ['Default', 'Cerulean', 'Cosmo', 'Cyborg', 'Darkly', 'Flatly', 'Journal', 'Litera', 'Lumen',
  'Lux', 'Materia', 'Minty', 'Pulse', 'Sandstone', 'Simplex', 'Sketchy', 'Slate', 'Solar', 'Spacelab',
  'Superhero', 'United', 'Yeti'];

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  theme(e){
    document.querySelector('.loader').classList.add('d-flex');
    var url =e.target.innerHTML.toLowerCase();
    document.getElementsByTagName("body")[0].setAttribute("class", url);
    if(document.head.getElementsByTagName("link").length >= 1 ){
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `assets/css/${url}/bootstrap.min.css`;
        document.head.getElementsByTagName("link").length > 2?document.head.removeChild(document.head.lastChild):0;
        document.head.appendChild(link);
    }
    setTimeout(function(){document.querySelector('.loader').classList.remove('d-flex');}, 500)  
  }
  constructor() { }

  ngOnInit() {
    document.getElementsByTagName("body")[0].setAttribute("class", "default");
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `assets/css/default/bootstrap.min.css`;
    document.head.appendChild(link);
  }

}
