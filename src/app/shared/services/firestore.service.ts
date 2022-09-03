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
import { first, from, mergeMap, toArray, catchError, EMPTY, of, switchMap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ref, getDownloadURL, Storage, listAll } from '@angular/fire/storage';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private _collection: CollectionReference<Product>;
  private _snapshot: CollectionReference<DocumentData>;

  constructor(
    private readonly _firestore: Firestore,
    private readonly _storage: Storage,
  ) {
    this._collection = collection(this._firestore, 'catalog') as CollectionReference<Product>;
    this._snapshot = this._collection.withConverter({
      fromFirestore: snapshot => snapshot.data(),
      toFirestore: (it: any) => it,
    });
  }

  public getAll(): Observable<Product[]> {
    return collectionData(this._collection)
      .pipe(
        first(),
        switchMap(products => products.map(product => {
          const urls = product.img.url;
          const keys = Object.keys(urls);
          if (keys.some(key => !key)) {
            return of(product);
          } else {
            return from(keys)
              .pipe(
                mergeMap(key => {
                  return from(getDownloadURL(ref(this._storage, urls[key]))).
                    pipe(mergeMap(url => urls[key] = url))
                }),
                toArray(),
                mergeMap(() => of(product))
              )
          }
        })),
        mergeMap(product => product),
        toArray(),
        catchError((err) => {
          console.log(err);
          return EMPTY;
        })
      )
  }

  public getAllImages(): Observable<string[]> {
    const listRef = ref(this._storage, 'images/catalog');

    return from(listAll(listRef))
      .pipe(
        mergeMap(refsList => refsList.items.map((itemRef) => itemRef.fullPath)),
        mergeMap(fullPath => from(getDownloadURL(ref(this._storage, fullPath)))),
        toArray()
      );
  }

  public getFeatured(): Observable<any> {
    const appQuery = query(this._snapshot, where('isFeatured', '==', true));

    return collectionData(appQuery).pipe(first());
  }
}
