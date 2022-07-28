import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[ngx-image-button]',
  exportAs: 'ngxImageButton',
  template: `
  <span class="ngx-button-wrapper">
      <ng-content></ng-content>
      <img class="ngx-button-image" src="{{src}}" alt="{{alt}}">
  </span>
  `,
  inputs: ['src', 'alt'],
  styleUrls: ['ngx-image-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxImageButtonComponent implements OnInit {

  src: string;
  alt: string;

  constructor() {
    this.src = '';
    this.alt = '';
  }

  ngOnInit(): void {
    
  }

}
