import { TestBed } from '@angular/core/testing';

import { DivaLibService } from './diva-lib.service';

describe('DivaLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DivaLibService = TestBed.get(DivaLibService);
    expect(service).toBeTruthy();
  });
});
