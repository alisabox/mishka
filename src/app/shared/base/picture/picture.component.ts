import { Component, Input } from '@angular/core';
import { ImageUrlTypes } from 'src/app/models/product.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent {
  private _height: string = '195';
  private _width: string = '260';
  private _isFeatured: boolean;

  @Input('imageUrls')
  public imageUrls: ImageUrlTypes;

  @Input('fileName')
  public fileName: string;

  @Input('altText')
  public altText: string;

  @Input('includeWebp')
  public includeWebp: boolean;

  @Input('isFeatured')
  public set isFeatured(value: boolean | '') {
    this._isFeatured = value || true;
  }

  public get isFeatured(): boolean {
    return this._isFeatured;
  }

  @Input('height')
  public set height(value: string | number) {
    this._height = value.toString();
  }

  public get height(): string {
    return this._height;
  }

  @Input('width')
  public set width(value: string | number) {
    this._width = value.toString();
  }

  public get width(): string {
    return this._width;
  }
}
