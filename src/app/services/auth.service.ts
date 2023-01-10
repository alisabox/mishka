import { EventEmitter, Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import {
  EMPTY,
  from,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import {
  doc,
  setDoc,
} from 'firebase/firestore';
import { AuthProvider } from 'firebase/auth';


export interface User {
  uid: string;
  email: string | null;
  emailVerified: boolean;
}

export type UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: firebase.User;
  private _isLoggedIn$: EventEmitter<boolean> = new EventEmitter<boolean>();

  public get isLoggedIn(): boolean {
    const userData = localStorage.getItem('user');
    const user = userData && JSON.parse(userData);

    return user && user.emailVerified;
  }

  public get isLoggedIn$(): EventEmitter<boolean> {
    return this._isLoggedIn$;
  }

  constructor(
    private readonly _firestore: Firestore,
    private readonly _fireAuth: AngularFireAuth,
    private readonly _router: Router,
  ) {
    this._fireAuth.authState.subscribe((user: firebase.User | null) => {
      if (user) {
        this._user = user;
        localStorage.setItem('user', JSON.stringify(this._user));
      }
    });
  }

  public logIn(email: string, password: string): Observable<User> {
    return from(this._fireAuth.signInWithEmailAndPassword(email, password))
      .pipe(
        switchMap((data: UserCredential) => {
          if (data.user) {
            this._router.navigate(['/']);
            this._isLoggedIn$.emit(true);

            return of(data.user);
          }

          return EMPTY;
        }),
      );
  }

  public logOut(): Observable<void> {
    return from(this._fireAuth.signOut())
      .pipe(tap(() => {
        localStorage.removeItem('user');
        this._isLoggedIn$.emit(false);
        this._router.navigate(['login']);
      }));
  }

  public signUp(email: string, password: string): Observable<User> {
    return from(this._fireAuth.createUserWithEmailAndPassword(email, password))
      .pipe(
        switchMap((data: UserCredential) => {
          this._sendVerificationMail();

          if (data.user) {
            return this._setUserData(data.user);
          }

          return EMPTY;
        }),
      );
  }

  private _sendVerificationMail(): Observable<User> {
    return from(this._fireAuth.currentUser)
      .pipe(
        tap((user: firebase.User | null) => {
          if (user) {
            user.sendEmailVerification();
          }
        }),
        switchMap((user) => {
          if (user) return of(user);

          return EMPTY;
        }),
      );
  }

  public forgotPassword(passwordResetEmail: string): Observable<void> {
    return from(this._fireAuth.sendPasswordResetEmail(passwordResetEmail))
      // eslint-disable-next-line no-console
      .pipe(tap(() => console.log('Password reset email sent, check your inbox.')));
  }

  public googleAuth(): Observable<User> {
    const provider = new GoogleAuthProvider();

    return from(this.authLogin(provider))
      .pipe(switchMap((user) => {
        if (user) {
          this._router.navigate(['/']);

          return of(user);
        }

        return EMPTY;
      }));
  }

  public authLogin(provider: AuthProvider): Observable<User> {
    return from(this._fireAuth.signInWithPopup(provider))
      .pipe(
        switchMap((data) => {
          if (data.user) {
            this._router.navigate(['/']);

            return of(data.user);
          }

          return EMPTY;
        }),
      );
  }

  private _setUserData(user: firebase.User): Observable<User> {
    const userRef = doc(this._firestore, `users/${user.uid}`);

    const userData = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
    };

    return from(setDoc(userRef, userData, { merge: true }))
      .pipe(map(() => userData));
  }
}
