import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { PricePipe } from 'src/app/shared/pipes/price.pipe';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { PictureComponent } from 'src/app/shared/base/picture/picture.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ModalComponent,
    PricePipe,
    TranslatePipe,
    PictureComponent,
  ],
})
export class MainPageComponent implements OnInit {
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
