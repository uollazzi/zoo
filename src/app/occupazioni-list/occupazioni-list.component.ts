import { Component, Input } from '@angular/core';
import { Occupazione } from '../persona';

@Component({
  selector: 'app-occupazioni-list',
  templateUrl: './occupazioni-list.component.html',
  styleUrls: ['./occupazioni-list.component.css']
})
export class OccupazioniListComponent {
  @Input()
  occupazioni: Occupazione[] = [];
}
