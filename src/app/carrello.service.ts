import { Injectable } from '@angular/core';
import { ProdottoACarrello } from './prodotto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  prodotti: ProdottoACarrello[] = [];
  totale = 0;

  constructor() { }

  aggiungi(prodotto: ProdottoACarrello) {
    let p = this.prodotti.find(x => x.id == prodotto.id);
    if (p == undefined) {
      this.prodotti.push(prodotto);
    } else {
      p.qta++;
    }

    this.calcolaTotale();
  }

  calcolaTotale() {
    this.totale = 0;
    for (const p of this.prodotti) {
      this.totale += (p.price * p.qta);
    }
  }
}
