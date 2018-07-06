import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private _collection: Observable<Item[]>;
  private itemsCollection: AngularFirestoreCollection<Item>;
  constructor(private afs: AngularFirestore) {
      this.itemsCollection = afs.collection<Item>('collection');
      this.collection = this.itemsCollection.valueChanges();
   }

  /**get collection */
  public get collection(): Observable<Item[]> {
    return this._collection;
  }

  /**set collection */
  public set collection(col: Observable<Item[]>) {
    this._collection = col;
  }


  /**
   * add item in collection
   */
  add(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));
  }
    // this._collection.push(arg);


  /**update item in collection */
    update(item: Item): void {
    this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));
  }
  /**delete item in collection */

  delete(item: Item): void {
    this.itemsCollection.doc(item.id).delete()
      .catch(error => console.log(error));
  }

}

}
