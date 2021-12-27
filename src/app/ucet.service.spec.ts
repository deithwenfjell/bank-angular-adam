/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UcetService } from './ucet.service';

describe('Service: Ucet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UcetService]
    });
  });

  it('should ...', inject([UcetService], (service: UcetService) => {
    expect(service).toBeTruthy();
  }));
});
