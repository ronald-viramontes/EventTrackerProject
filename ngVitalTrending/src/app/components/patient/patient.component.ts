import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  patients: Patient[] = [];
  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.reloadPatients();
  }

  reloadPatients(): void {
    this.patientService.index().subscribe(
      (data) => {
        this.patients = data;
      },
      (err) => {
        console.error('Error retrieving todo list', err);
        console.error(err);
      }
    );
  }
}
