/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KlientService } from './klient.service';

describe('Service: KlientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KlientService]
    });
  });

  it('should ...', inject([KlientService], (service: KlientService) => {
    expect(service).toBeTruthy();
  }));
});
