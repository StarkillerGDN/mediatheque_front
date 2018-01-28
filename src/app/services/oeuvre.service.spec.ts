import { TestBed, inject } from '@angular/core/testing';

import { OeuvreService } from './oeuvre.service';

describe('OeuvreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OeuvreService]
    });
  });

  it('should be created', inject([OeuvreService], (service: OeuvreService) => {
    expect(service).toBeTruthy();
  }));
});
