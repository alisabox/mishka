import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {

  @Input('textContent')
  public textContent: string;

  constructor() { }

  ngOnInit(): void {
  }

}
