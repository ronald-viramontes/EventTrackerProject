import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FamilyMedicalHistory } from '../models/family-medical-history';
import { PatientService } from './patient.service';

@Injectable({
  providedIn: 'root',
})
export class FamilyMedicalHistoryService {
  private baseUrl = 'http://localhost:8086/';
  private url = this.baseUrl + 'api/patients/';

  constructor(private http: HttpClient, private currentRoute: ActivatedRoute) {}

  patientIndex(id: number): Observable<FamilyMedicalHistory[]> {
    return this.http
      .get<FamilyMedicalHistory[]>(`${this.url}${id}/familymedicalhistory/`)
      .pipe(
        catchError((error: any) => {
          console.error('Error retrieving patient family medical history');
          return throwError(error);
        })
      );
  }
  create(pid: number, newFMH: FamilyMedicalHistory) {
    return this.http
      .post<FamilyMedicalHistory>(
        `${this.url}${pid}/familymedicalhistory/`,
        newFMH
      )
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  update(pid: number, fmhId: number, updatedFMH: FamilyMedicalHistory) {
    return this.http
      .put<FamilyMedicalHistory>(
        `${this.url}${pid}/familymedicalhistory/${fmhId}`,
        updatedFMH
      )
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  destroy(pid: number, fmhId: number) {
    return this.http
      .delete<FamilyMedicalHistory>(
        `${this.url}${pid}/familymedicalhistory/${fmhId}`
      )
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }
}
