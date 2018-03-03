import { TestBed, inject } from '@angular/core/testing';

import { ArtworkService } from './artwork.service';

describe('OeuvreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtworkService]
    });
  });

  it('should be created', inject([ArtworkService], (service: ArtworkService) => {
    expect(service).toBeTruthy();
  }));
});
