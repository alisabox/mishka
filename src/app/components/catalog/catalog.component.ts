import { Component, OnDestroy, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { ReplaySubject, takeUntil } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
  private _products: Product[];
  private _isLoaded: boolean = false;
  private _destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  public get isLoaded(): boolean {
    return this._isLoaded;
  }

  public get products(): Product[] {
    return this._products;
  }

  constructor(private _service: FirestoreService) { }

  public ngOnInit(): void {
    this._service.getAll()
      .pipe(takeUntil(this._destroy$))
      .subscribe((products) => {
        this._products = products;
        this._isLoaded = true;
      });
  }

  public ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
}
