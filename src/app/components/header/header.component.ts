import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('navigationMenu')
  private _navigationMenu: ElementRef<HTMLDivElement>;

  constructor(private _router: Router) {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this._navigationMenu.nativeElement.classList.contains('page-navigation--active')) {
          this.toggleMenu();
        }
      }
    })
  }

  public toggleMenu(): void {
    this._navigationMenu.nativeElement.classList.toggle('page-navigation--active');
  }
}
