import { TestBed } from '@angular/core/testing';

import { TareasserviceService } from './tareasservice.service';

describe('TareasserviceService', () => {
  let service: TareasserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
