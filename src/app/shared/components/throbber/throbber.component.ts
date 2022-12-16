import { Component } from '@angular/core';

@Component({
  selector: 'app-throbber',
  template: `
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `,
  styleUrls: ['./throbber.component.scss'],
})
export class ThrobberComponent {
}
