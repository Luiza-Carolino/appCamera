import { TestBed } from '@angular/core/testing';

import { CamaraServiceService } from './camara-service.service';

describe('CamaraServiceService', () => {
  let service: CamaraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamaraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
