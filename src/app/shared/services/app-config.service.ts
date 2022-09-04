import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app-config';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  data: AppConfig = {};

  constructor(private http: HttpClient) { }

  load(defaults?: AppConfig): Promise<AppConfig> {
    return new Promise<AppConfig>(resolve => {
      this.http.get('app.config.json').subscribe(
        response => {
          this.data = Object.assign({}, defaults || {}, response || {});
          resolve(this.data);
        },
        () => {
          this.data = Object.assign({}, defaults || {});
          resolve(this.data);
        }
      );
    });
  }
}
