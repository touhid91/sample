import { Component } from '@angular/core';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent {
  c = {
    name: 'HP',
    author: 'J. K. Rowling'
  };

  url = 'https://avatars3.githubusercontent.com/u/30457514?s=88&v=4';
  temp = url => `<img src=${url}/>`;
}
