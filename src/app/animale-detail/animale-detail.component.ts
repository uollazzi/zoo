import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animale } from '../animale';

@Component({
  selector: 'app-animale-detail',
  templateUrl: './animale-detail.component.html',
  styleUrls: ['./animale-detail.component.css']
})
export class AnimaleDetailComponent {

  @Input()
  animale?: Animale;

  @Output()
  onAnimaleEliminato = new EventEmitter<Animale>();

  elimina() {
    this.onAnimaleEliminato.emit(this.animale);
  }
}
