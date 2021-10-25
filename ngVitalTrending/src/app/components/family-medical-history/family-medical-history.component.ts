import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FamilyMedicalHistory } from 'src/app/models/family-medical-history';
import { FamilyMedicalHistoryService } from 'src/app/services/family-medical-history.service';

@Component({
  selector: 'app-family-medical-history',
  templateUrl: './family-medical-history.component.html',
  styleUrls: ['./family-medical-history.component.css'],
})
export class FamilyMedicalHistoryComponent implements OnInit {
  fmhxs: FamilyMedicalHistory[] = [];
  familyMedicalHistory: FamilyMedicalHistory = new FamilyMedicalHistory();

  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute,
    private fmhxService: FamilyMedicalHistoryService
  ) {}

  ngOnInit(): void {}

  displayPatientFamilyMedicalHistory(id: number) {
    this.fmhxService.patientIndex(id).subscribe(
      (success) => {
        console.log('Patient vitals retrieved');
        console.log(success);
        this.fmhxs = success;
      },
      (fail) => {
        console.error('Failed to retrieve patient vital signs');
        console.error(fail);
      }
    );
  }
}
