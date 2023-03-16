import { Component } from '@angular/core';
import { Animale } from '../animale';
import { ANIMALI } from '../animali-dati';

@Component({
  selector: 'app-animali-totale',
  templateUrl: './animali-totale.component.html',
  styleUrls: ['./animali-totale.component.css']
})
export class AnimaliTotaleComponent {
  animali: Animale[] = ANIMALI;

  animale: Animale = { id: 0, nome: "", quadrupede: false };

  nuovoAnimale() {
    this.animali.push(this.animale);

    this.animale = { id: 0, nome: "", quadrupede: false };
  }
}
