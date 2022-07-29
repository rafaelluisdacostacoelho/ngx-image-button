import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-image-button',
  exportAs: 'ngxImageButton', 
  template: `
  <div class="ngx-button-wrapper">
      <button type="button">
        <img class="ngx-button-image" src="{{image}}" alt="{{alternative}}">
      </button>
  </div>
  `,
  inputs: ['image', 'alternative'],
  styleUrls: ['ngx-image-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxImageButtonComponent implements OnInit {

  image: string;
  alternative: string;

  constructor() {
    this.image = '';
    this.alternative = '';
  }

  ngOnInit(): void {
    
  }

}
