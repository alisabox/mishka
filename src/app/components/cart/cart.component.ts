import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
  ],
})
export class CartComponent {
}
