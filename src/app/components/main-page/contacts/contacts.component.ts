import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @ViewChild('map') mapElement: any;

  constructor() { }

  ngOnInit(): void {
  }

}
