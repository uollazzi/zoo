import { Component } from '@angular/core';
import { Animale } from '../animale';
import { ANIMALI } from '../animali-dati';

@Component({
  selector: 'app-animali-list',
  templateUrl: './animali-list.component.html',
  styleUrls: ['./animali-list.component.css']
})
export class AnimaliListComponent {
  animali: Animale[] = ANIMALI;

  inserisciAnimale(a: Animale) {
    this.animali.push(a);
  }

  eliminaAnimale(a: Animale) {
    let indice = this.animali.indexOf(a);

    if (indice > -1) {
      this.animali.splice(indice, 1);
    }
  }
}
