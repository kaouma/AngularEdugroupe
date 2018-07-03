import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {
@Input() item: Item;
public state = State;
  constructor() { }

  ngOnInit() {
  }

}
