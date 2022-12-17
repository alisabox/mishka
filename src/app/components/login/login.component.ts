import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  faEnvelope,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  animations: [
    trigger('formFlip', [
      transition('true <=> false', [
        animate('500ms', keyframes([
          style({ opacity: '1' }),
          style({ opacity: '0' }),
          style({ opacity: '1' }),
        ])),
      ]),
    ]),
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public readonly faEnvelope = faEnvelope;
  public readonly faLock = faLock;
  public readonly faGoogle = faGoogle;
  public readonly faFacebookF = faFacebookF;
  public readonly faGithub = faGithub;

  public formFlipped: boolean = false;

  private _isLoginPage: boolean = true;

  public loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  public get isLoginPage(): boolean {
    return this._isLoginPage;
  }

  public get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  public get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  public changePageMode(): void {
    this.formFlipped = true;

    setTimeout(() => {
      this._isLoginPage = !this._isLoginPage;
      this.formFlipped = false;
    }, 250);
  }

  public onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      // eslint-disable-next-line no-console
      console.log(this.loginForm.value);
    }
  }
}
