import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router, Event } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  private _isLoggedIn: boolean = false;
  private _productsInCart: number = 0;

  @ViewChild('navigationMenu')
  private _navigationMenu: ElementRef<HTMLDivElement>;

  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public get productsInCart(): number {
    return this._productsInCart;
  }

  constructor(
    private readonly _router: Router,
    private readonly _authService: AuthService,
    private readonly _cartService: CartService,
    private readonly _snackBar: MatSnackBar,
  ) {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this._navigationMenu.nativeElement.classList.contains('page-navigation--active')) {
          this.toggleMenu();
        }
      }
    });
  }

  public ngOnInit(): void {
    this._isLoggedIn = this._authService.isLoggedIn;
    this._authService.isLoggedIn$.subscribe((status) => this._isLoggedIn = status);

    this._productsInCart = this._cartService.getItems().length;
    this._cartService.products$.subscribe((products) => this._productsInCart = products.length);
  }

  public toggleMenu(): void {
    this._navigationMenu.nativeElement.classList.toggle('page-navigation--active');
  }

  public logOut(): void {
    this._authService.logOut().subscribe(() => {
      this._snackBar.open('You have successfully logged out.', 'Close', {
        verticalPosition: 'top',
        duration: 2000,
      });
    });
  }
}
