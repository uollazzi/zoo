import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnimaliComponent } from './animali/animali.component';
import { AnimaliListComponent } from './animali-list/animali-list.component';
import { AnimaleDetailComponent } from './animale-detail/animale-detail.component';
import { PersoneListComponent } from './persone-list/persone-list.component';
import { PersonaDetailComponent } from './persona-detail/persona-detail.component';
import { OccupazioniListComponent } from './occupazioni-list/occupazioni-list.component';
import { LingueListComponent } from './lingue-list/lingue-list.component';
import { MenuComponent } from './menu/menu.component';
import { AnimaleEditComponent } from './animale-edit/animale-edit.component';
import { AnimaliTotaleComponent } from './animali-totale/animali-totale.component';
import { ProdottiListComponent } from './prodotti-list/prodotti-list.component';
import { ProdottoDetailComponent } from './prodotto-detail/prodotto-detail.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { AmazonComponent } from './amazon/amazon.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimaliComponent,
    AnimaliListComponent,
    AnimaleDetailComponent,
    PersoneListComponent,
    PersonaDetailComponent,
    OccupazioniListComponent,
    LingueListComponent,
    MenuComponent,
    AnimaleEditComponent,
    AnimaliTotaleComponent,
    ProdottiListComponent,
    ProdottoDetailComponent,
    CarrelloComponent,
    AmazonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
