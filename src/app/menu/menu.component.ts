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

    let stagione: Stagione = Stagione.Inverno;

    this.checkStagione(stagione);

  }

  checkStagione(s: Stagione) {
    if (s == Stagione.Inverno) {
      console.log("nevica");
    } else if (s == Stagione.Autunno) {
      console.log("piove");
    }
    else {
      console.log("non so");
    }

    switch (s) {
      case Stagione.Inverno:

        break;
      case Stagione.Primavera:

        break;
      case Stagione.Autunno:

        break;
      case Stagione.Estate:

        break;


    }
  }
}

enum Stagione {
  Primavera,
  Estate,
  Autunno,
  Inverno
}
