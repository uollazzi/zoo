import { Component } from '@angular/core';
import { Animale } from '../animale';
import { ANIMALI } from '../animali-dati';

@Component({
  selector: 'app-animali',
  templateUrl: './animali.component.html',
  styleUrls: ['./animali.component.css']
})
export class AnimaliComponent {
  animale?: Animale;

  animali = ANIMALI;

  selezionaAnimale(animale: Animale): void {
    this.animale = animale;
  }
}
