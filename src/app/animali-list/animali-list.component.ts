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
}
