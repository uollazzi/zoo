import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // TODO: ENUM
  @Output()
  onPageChanged = new EventEmitter<string>();

  cambiaPagina(pagina: string) {
    this.onPageChanged.emit(pagina);
  }
}
