import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('textContent')
  public textContent: string;

  @Input('path')
  public path: string | undefined;

  @Input('uniqueClass')
  public uniqueClass: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
