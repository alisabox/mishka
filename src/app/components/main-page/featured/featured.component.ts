import {
  Component,
  OnInit,
} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  private _activeModal: boolean = false;
  private _featured: Product;

  public get activeModal(): boolean {
    return this._activeModal;
  }

  public get featured(): Product {
    return this._featured;
  }

  constructor(
    private _service: FirestoreService,
  ) {

  }

  ngOnInit(): void {
    this._service.getFeatured().subscribe((featured) => this._featured = featured[0]);
  }

  public showModal(): void {
    this._activeModal = true;
  }

  public closeModal(): void {
    this._activeModal = false;
  }

}
