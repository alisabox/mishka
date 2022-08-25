import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { TranslateService } from 'src/app/shared/services/translate.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  private _featured: Product;

  public get featured(): Product {
    return this._featured;
  }

  constructor(
    translateService: TranslateService,
    private _service: FirestoreService,
  ) {

  }

  ngOnInit(): void {
    this._service.getFeatured().subscribe((featured) => this._featured = featured[0]);
  }

}
