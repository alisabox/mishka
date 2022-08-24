import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';

import { collectionData, Firestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private pokemonCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.pokemonCollection = collection(this.firestore, 'catalog');
    console.log(this.firestore);
  }

  getAll() {
    return collectionData(this.pokemonCollection) as Observable<any>;
  }
}
