import { Component } from '@angular/core';
import {
  faEnvelope,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public readonly faEnvelope = faEnvelope;
  public readonly faLock = faLock;
  public readonly faGoogle = faGoogle;
  public readonly faFacebookF = faFacebookF;
  public readonly faGithub = faGithub;
}
