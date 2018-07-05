import { State } from '../shared/enums/state.enum';
import { Item } from '../shared/interfaces/item';

export const COLLECTION: Item[] = [
{
  id: 'a1',
  name: 'william',
  reference: '1234',
  state: State.ALIVRER,
  dateLivraison: new Date('2018-04-23')
},
{
  id: 'b1',
  name: 'geraldine',
  reference: '4537',
  state: State.ENCOURS,
  dateLivraison: new Date('2018-04-23')
},
{
  id: 'c1',
  name: 'leatitia',
  reference: '7894',
  state: State.LIVREE,
  dateLivraison: new Date('2018-04-23')
}

];
