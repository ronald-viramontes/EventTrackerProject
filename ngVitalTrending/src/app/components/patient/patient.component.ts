import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FamilyMedicalHistory } from 'src/app/models/family-medical-history';
import { MedicalHistory } from 'src/app/models/medical-history';
import { Patient } from 'src/app/models/patient';
import { VitalSign } from 'src/app/models/vital-sign';
import { FamilyMedicalHistoryService } from 'src/app/services/family-medical-history.service';
import { MedicalHistoryService } from 'src/app/services/medical-history.service';
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
  vitalForm: boolean = false;
  fmhxForm: boolean = false;
  mhxForm: boolean = false;
  newPatient: Patient = new Patient();
  vitalSign: VitalSign | null = null;
  patients: Patient[] = [];
  vitalSigns: VitalSign[] = [];
  patient: Patient = new Patient();
  fmhxs: FamilyMedicalHistory[] = [];
  fmhx: FamilyMedicalHistory = new FamilyMedicalHistory();
  mhxs: MedicalHistory[] = [];
  mhx: MedicalHistory = new MedicalHistory();
  editPtForm: boolean = false;

  constructor(
    private patientService: PatientService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private vitalService: VitalSignService,
    private fmhxService: FamilyMedicalHistoryService,
    private mhxService: MedicalHistoryService
  ) {}

  setEditPatient() {
    this.editPtForm = true;
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
  pullPtMedicalHistory(id: number) {
    if (this.mhxForm) {
      this.mhxForm = false;
    } else {
      this.mhxForm = true;
    }
    return this.mhxService.patientIndex(id).subscribe(
      (data) => {
        this.mhxs = data;
        console.log(this.fmhxs);
      },
      (fail) => {
        console.error(fail);
      }
    );
  }

  pullPtFamilyMedicalHistory(id: number) {
    if (this.fmhxForm) {
      this.fmhxForm = false;
    } else {
      this.fmhxForm = true;
    }
    return this.fmhxService.patientIndex(id).subscribe(
      (data) => {
        this.fmhxs = data;
        console.log(this.fmhxs);
      },
      (fail) => {
        console.error(fail);
      }
    );
  }

  pullPtVitals(id: number) {
    if (this.vitalForm) {
      this.vitalForm = false;
    } else {
      this.vitalForm = true;
    }

    return this.vitalService.retrieveVitals(id).subscribe(
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
    this.fmhxForm = false;
    this.mhxForm = false;
    this.vitalForm = false;
    this.editPtForm = false;

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
