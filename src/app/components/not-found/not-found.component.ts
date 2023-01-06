import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
  ],
})
export class NotFoundComponent {

}
