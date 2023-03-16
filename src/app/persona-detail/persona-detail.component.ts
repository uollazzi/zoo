import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css']
})
export class PersonaDetailComponent {

  @Input()
  persona?: Persona;

  @Output()
  onPersonaAssunta = new EventEmitter<Persona>();

  assumi() {

    this.onPersonaAssunta.emit(this.persona);
  }
}
