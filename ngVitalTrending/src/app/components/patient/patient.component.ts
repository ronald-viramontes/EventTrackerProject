import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { VitalSign } from 'src/app/models/vital-sign';
import { PatientService } from 'src/app/services/patient.service';
import { VitalSignService } from 'src/app/services/vital-sign.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  selected: Patient | null = null;
  // selectedVitals: VitalSign[] | null = null;
  editSelected: Patient | null = null;

  newPatient: Patient = new Patient();
  vitalSign: VitalSign | null = null;
  patients: Patient[] = [];
  vitalSigns: VitalSign[] = [];
  patient: Patient = new Patient();

  constructor(
    private patientService: PatientService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private vitalService: VitalSignService
  ) {}

  setEditPatient() {
    this.editSelected = Object.assign({}, this.selected);
  }

  getTotalPatients() {
    return this.patients.length;
  }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.params['id'];
    if (this.currentRoute.snapshot.paramMap.get('id')) {
      this.patientService.show(id).subscribe(
        (found) => {
          this.selected = found;
        },
        (notFound) => {
          console.error('Patient not found');
          console.error(notFound);
          this.router.navigateByUrl('**');
        }
      );
    }

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
  displayPatient(patient: Patient) {
    this.selected = patient;
    let vitalArr = [{}];
    for (let vitals in patient.vitalSigns) {
      vitalArr.push(vitals);
    }
  }

  showPatientVitals(patient: Patient) {
    console.log(patient.vitalSigns);
    let vitalArr = [{}];
    var i = 0;

    for (let vitals in patient.vitalSigns) {
      vitalArr.push(vitals);
      console.log(vitalArr[i]);
      i++;
    }
    return vitalArr;
  }

  pullPtVitals() {
    return this.vitalService.index().subscribe(
      (data) => {
        this.vitalSigns = data;
        console.log(this.vitalSigns);
      },
      (fail) => {
        console.log(fail);
      }
    );
  }

  displayPatientTable() {
    this.reloadPatients();
    return (this.selected = null);
  }

  updatePatient(patient: Patient, showPatient = true) {
    return this.patientService.update(patient.id, patient).subscribe(
      (success) => {
        this.reloadPatients();
        this.editSelected = null;
        if (showPatient) {
          this.selected = success;
        }
      },
      (failure) => {
        console.error('Failed to update patient data');
        console.error(failure);
      }
    );
    this.reloadPatients();
  }
  deletePatient(patient: Patient) {
    this.patientService.destroy(patient.id).subscribe(
      (success) => {
        this.reloadPatients();
      },
      (failure) => {
        console.error('Error removing patient');
        console.error(failure);
      }
    );
  }
  addPatient(newPatient: Patient) {
    this.patientService.create(newPatient).subscribe(
      (success) => {
        console.log('successfully added new patient');
        this.reloadPatients();
        this.newPatient = new Patient();
      },
      (failure) => {
        console.error('failed to add new patient');
        console.error(failure);
      }
    );
  }
}
