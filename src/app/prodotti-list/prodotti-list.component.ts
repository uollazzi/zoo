import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../prodotti.service';
import { Prodotto } from '../prodotto';

@Component({
  selector: 'app-prodotti-list',
  templateUrl: './prodotti-list.component.html',
  styleUrls: ['./prodotti-list.component.css']
})
export class ProdottiListComponent implements OnInit {
  prodotti: Prodotto[] = [];

  constructor(private prodottiService: ProdottiService) {

  }

  ngOnInit(): void {
    this.prodotti = this.prodottiService.getProdotti();
  }
}
