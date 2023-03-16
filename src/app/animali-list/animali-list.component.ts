import { Component, OnInit } from '@angular/core';
import { Animale } from '../animale';
import { AnimaliService } from '../animali.service';

@Component({
  selector: 'app-animali-list',
  templateUrl: './animali-list.component.html',
  styleUrls: ['./animali-list.component.css']
})
export class AnimaliListComponent implements OnInit {
  animali: Animale[] = [];

  constructor(private animaliService: AnimaliService) {

  }

  ngOnInit(): void {
    this.animali = this.animaliService.getAnimali();
  }

  inserisciAnimale(a: Animale) {
    this.animaliService.addAnimale(a);
    this.animali = this.animaliService.getAnimali();
  }

  eliminaAnimale(a: Animale) {
    this.animaliService.removeAnimale(a);
    this.animali = this.animaliService.getAnimali();
  }
}
