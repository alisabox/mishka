import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  data: { [key: string]: string } = {};

  constructor(private http: HttpClient) {
  }

  use(lang: string): Subscription {
    const langPath = `assets/i18n/${lang || 'en'}.json`;

    return this.http.get<{ [key: string]: string }>(langPath).subscribe({
      next: (response) => this.data = response || {},
      error: () => this.data = {},
    });
  }
}
