import { TestBed, inject } from '@angular/core/testing';

import { RandomizeWordsService } from './randomize-words.service';

describe('RandomizeWordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomizeWordsService]
    });
  });

  it('should be created', inject([RandomizeWordsService], (service: RandomizeWordsService) => {
    expect(service).toBeTruthy();
  }));
});
