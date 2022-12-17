import {
  Component,
  Input,
} from '@angular/core';

export type BtnStyle = 'basic' | 'green';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input('textContent')
  public textContent: string;

  @Input('path')
  public path: string | undefined;

  @Input('btnStyle')
  public btnStyle: BtnStyle = 'basic';

  @Input('btnDisabled')
  public btnDisabled: boolean = false;
}
