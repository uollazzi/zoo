import { Component } from '@angular/core';
import { CarrelloService } from '../carrello.service';
import { ProdottoACarrello } from '../prodotto';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {
  constructor(public carrelloService: CarrelloService) {

  }
}
