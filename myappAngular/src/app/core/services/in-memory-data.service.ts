import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { State } from '../../shared/enums/state.enum';
import { Item2 } from '../../shared/interfaces/item2';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const ITEMS: Item2[] = [
      {
        id: 0,
        name: 'william',
        reference: '1234',
        state: State.ALIVRER,
        dateLivraison: new Date('2018-04-23')
      },
      {
        id: 1,
        name: 'geraldine',
        reference: '4537',
        state: State.ENCOURS,
        dateLivraison: new Date('2018-04-23')
      },
      {
        id: 2,
        name: 'leatitia',
        reference: '7894',
        state: State.LIVREE,
        dateLivraison: new Date('2018-04-23')
      }
    ];
    return {ITEMS};
  }
}

