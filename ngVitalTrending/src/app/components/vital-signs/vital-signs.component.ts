import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { VitalSign } from 'src/app/models/vital-sign';
import { PatientService } from 'src/app/services/patient.service';
import { VitalSignService } from 'src/app/services/vital-sign.service';

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.css'],
})
export class VitalSignsComponent implements OnInit {
  vitalSigns: VitalSign[] = [];
  newVitalSign: VitalSign = new VitalSign();
  patient: Patient = new Patient();
  constructor(
    private patientService: PatientService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private vsService: VitalSignService
  ) {}

  ngOnInit(): void {
    this.reloadPatientVitals();
  }

  reloadPatientVitals(): void {
    this.vsService.index().subscribe(
      (data) => {
        this.vitalSigns = data;
      },
      (err) => {
        console.error('Error retrieving todo list', err);
        console.error(err);
      }
    );
  }
}
