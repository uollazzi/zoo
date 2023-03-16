import { Injectable } from '@angular/core';
import { Animale } from './animale';
import { ANIMALI } from './animali-dati';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class AnimaliService {

  constructor() { }

  getAnimali(): Animale[] {
    return ANIMALI;
  }

  addAnimale(animale: Animale) {
    ANIMALI.push(animale);
  }

  removeAnimale(animale: Animale) {
    _.remove(ANIMALI, animale);
  }
}
