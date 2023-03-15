import { Component } from '@angular/core';
import { Lingua, Persona } from '../persona';
import { PERSONE } from '../persone-dati';

@Component({
  selector: 'app-persone-list',
  templateUrl: './persone-list.component.html',
  styleUrls: ['./persone-list.component.css']
})
export class PersoneListComponent {
  persone: Persona[] = PERSONE;

  lingueTotali: Lingua[] = [];

  assumiPersona(p: Persona) {
    this.lingueTotali.push(...p.lingue); // TODO
  }
}
