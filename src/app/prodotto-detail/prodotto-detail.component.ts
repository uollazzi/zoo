import { Component, Input, OnInit } from '@angular/core';
import { CarrelloService } from '../carrello.service';
import { ProdottiService } from '../prodotti.service';
import { Prodotto, ProdottoACarrello } from '../prodotto';

@Component({
  selector: 'app-prodotto-detail',
  templateUrl: './prodotto-detail.component.html',
  styleUrls: ['./prodotto-detail.component.css']
})
export class ProdottoDetailComponent implements OnInit {

  @Input()
  prodotto?: Prodotto;

  constructor(
    private prodottiService: ProdottiService,
    private carrelloService: CarrelloService) {
  }

  ngOnInit(): void {

  }

  aggiungi(prodotto: Prodotto) {
    let p: ProdottoACarrello = {
      id: prodotto.id,
      title: prodotto.title,
      price: prodotto.price,
      qta: 1
    };

    this.carrelloService.aggiungi(p);
  }

}
