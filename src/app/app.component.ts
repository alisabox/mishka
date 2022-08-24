import { Component } from '@angular/core';
import { FirestoreService } from './shared/services/firestore.service';
// import { collection, doc, docSnapshots, DocumentReference, Firestore, onSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mishka';

  constructor(private service: FirestoreService) {
    service.getAll().subscribe((res) => console.log(res));
  }
}
