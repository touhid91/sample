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
  }
}
