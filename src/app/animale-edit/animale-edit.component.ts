import { Component, Output, EventEmitter } from '@angular/core';
import { Animale, AnimaleClasse } from '../animale';

@Component({
  selector: 'app-animale-edit',
  templateUrl: './animale-edit.component.html',
  styleUrls: ['./animale-edit.component.css']
})
export class AnimaleEditComponent {
  animale = new AnimaleClasse(0, "", false);

  @Output()
  onNuovoAnimale = new EventEmitter<Animale>();

  nuovoAnimale() {
    this.onNuovoAnimale.emit(this.animale);

    this.animale = new AnimaleClasse(0, "", false);
  }
}
