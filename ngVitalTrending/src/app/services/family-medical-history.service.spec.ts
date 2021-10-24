import { TestBed } from '@angular/core/testing';

import { FamilyMedicalHistoryService } from './family-medical-history.service';

describe('FamilyMedicalHistoryService', () => {
  let service: FamilyMedicalHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyMedicalHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
