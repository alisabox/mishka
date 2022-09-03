import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('modal')
  private _modal: ElementRef<HTMLElement>;

  @Output()
  public closeModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public check(event: Event): void {
    if (event.target === this._modal.nativeElement) {
      this.closeModal.emit();
    }
  }
}
