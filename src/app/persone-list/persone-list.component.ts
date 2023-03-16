import { Component } from '@angular/core';
import { Lingua, Persona } from '../persona';
import { PERSONE } from '../persone-dati';
import * as _ from "lodash";

@Component({
  selector: 'app-persone-list',
  templateUrl: './persone-list.component.html',
  styleUrls: ['./persone-list.component.css']
})
export class PersoneListComponent {
  persone: Persona[] = PERSONE;

  lingueTotali: Lingua[] = [];
  numeri: number[] = [1, 1, 1, 1, 1, 1, 1];

  assumiPersona(p: Persona) {

    // this.lingueTotali.push(...p.lingue); // TODO

    this.aggiungiLingue(p.lingue);
  }

  aggiungiLingue(lingue: Lingua[]) {
    for (const lingua of lingue) {
      if (this.lingueTotali.indexOf(lingua) == -1) {
        this.lingueTotali.push(lingua);
      }
    }
  }
}
