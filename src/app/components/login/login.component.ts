import { Component, OnInit } from '@angular/core';
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
import { AuthService } from 'src/app/services/auth.service';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
})
export class LoginComponent implements OnInit {
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

  constructor(
    private readonly _authService: AuthService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _snackBar: MatSnackBar,
  ) { }

  public ngOnInit(): void {
    if (this._activatedRoute.snapshot.url[0].path === 'sign-up') {
      this._isLoginPage = false;
    }
  }

  public changePageMode(): void {
    this.formFlipped = true;

    setTimeout(() => {
      this._isLoginPage
        ? this._router.navigate(['sign-up'])
        : this._router.navigate(['login']);

      this._isLoginPage = !this._isLoginPage;
      this.formFlipped = false;
    }, 250);
  }

  public onSubmit(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      if (this.isLoginPage) {
        this._authService.logIn(this.email?.value, this.password?.value)
          .subscribe(() => {
            this._snackBar.open('You have successfully logged in.', 'Close', {
              verticalPosition: 'top',
              duration: 2000,
            });
          });
      } else {
        this._authService.signUp(this.email?.value, this.password?.value);
      }
    }
  }
}
