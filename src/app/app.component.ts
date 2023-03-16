import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Nella Vecchia Fattoria';

  paginaSelezionata = "animali";
  bg = "";

  mostraPagina(pagina: string) {
    this.paginaSelezionata = pagina;

    switch (pagina) {
      case 'animali':
        this.bg = "#FF0000";
        break;
      case 'persone':
        this.bg = "#FFF000";
        break;
      default:
        this.bg = "";
        break;
    }
  }
}
