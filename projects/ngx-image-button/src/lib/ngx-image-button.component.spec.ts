import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageButtonComponent } from './ngx-image-button.component';

describe('NgxImageButtonComponent', () => {
  let component: NgxImageButtonComponent;
  let fixture: ComponentFixture<NgxImageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxImageButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxImageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
