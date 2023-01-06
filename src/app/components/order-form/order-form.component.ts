import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
  ],
})
export class OrderFormComponent {
}
