import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { State } from 'src/app/shared/enums/state.enum';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {
@Input() item: Item;
public state = State;
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
  }
public changeState(etat: State): void {
this.item.state = etat;
this.collectionService.update(this.item);
}
public delete(): void
{
  this.collectionService.delete(this.item);

}
}
