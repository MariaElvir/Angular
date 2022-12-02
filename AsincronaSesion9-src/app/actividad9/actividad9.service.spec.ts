import { TestBed } from '@angular/core/testing';

import { Actividad9Service } from './actividad9.service';

describe('Actividad9Service', () => {
  let service: Actividad9Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Actividad9Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
