import { TestBed } from '@angular/core/testing';

import { NgxImageButtonService } from './ngx-image-button.service';

describe('NgxImageButtonService', () => {
  let service: NgxImageButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImageButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
