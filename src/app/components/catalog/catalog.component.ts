import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { first } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  private _products: Product[];

  public get products(): Product[] {
    return this._products;
  }

  constructor(private _service: FirestoreService) {

  }

  ngOnInit(): void {
    this._service.getAll().subscribe((products) => this._products = products);
  }

}
