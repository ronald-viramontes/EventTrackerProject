import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyMedicalHistoryComponent } from './family-medical-history.component';

describe('FamilyMedicalHistoryComponent', () => {
  let component: FamilyMedicalHistoryComponent;
  let fixture: ComponentFixture<FamilyMedicalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyMedicalHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyMedicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
