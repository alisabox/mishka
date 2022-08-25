import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';
import {
  collectionData,
  Firestore,
  query,
  where
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private _collection: CollectionReference<DocumentData>;
  private _snapshot: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this._collection = collection(this.firestore, 'catalog');
    this._snapshot = this._collection.withConverter({
      fromFirestore: snapshot => snapshot.data(),
      toFirestore: (it: any) => it,
    });
  }

  public getAll(): Observable<any> {
    return collectionData(this._collection).pipe(first());
  }

  public getFeatured(): Observable<any> {
    const appQuery = query(this._snapshot, where('isFeatured', '==', true));

    return collectionData(appQuery).pipe(first());
  }
}
