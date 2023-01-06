import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
})
export class ModalComponent {
  @ViewChild('modal')
  private _modal: ElementRef<HTMLElement>;

  @Output()
  public closeModal = new EventEmitter();

  public check(event: Event): void {
    if (event.target === this._modal.nativeElement) {
      this.closeModal.emit();
    }
  }
}
