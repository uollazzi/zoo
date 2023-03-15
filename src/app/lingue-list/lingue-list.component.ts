import { Component, Input } from '@angular/core';
import { Lingua } from '../persona';

@Component({
  selector: 'app-lingue-list',
  templateUrl: './lingue-list.component.html',
  styleUrls: ['./lingue-list.component.css']
})
export class LingueListComponent {
  @Input()
  lingue: Lingua[] = [];
}
