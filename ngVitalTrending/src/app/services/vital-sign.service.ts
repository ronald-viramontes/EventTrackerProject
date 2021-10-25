import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../models/patient';
import { VitalSign } from '../models/vital-sign';
import { PatientService } from './patient.service';

@Injectable({
  providedIn: 'root',
})
export class VitalSignService {
  private baseUrl = 'http://localhost:8086/';
  private url = this.baseUrl + 'api/patients/';

  constructor(
    private http: HttpClient,
    private patientService: PatientService,
    private currentRoute: ActivatedRoute
  ) {}

  index(): Observable<VitalSign[]> {
    let pid = this.currentRoute.snapshot.params['id'];
    return this.http.get<VitalSign[]>(this.url + pid + 'vitalsigns').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }

  retrieveVitals(id: number): Observable<VitalSign[]> {
    return this.http
      .get<VitalSign[]>(`http://localhost:8086/api/patients/${id}/vitalsigns/`)
      .pipe(
        catchError((error: any) => {
          console.error('Error retrieving patient vital signs');
          return throwError(error);
        })
      );
  }
  create(pid: number, newVitalSign: VitalSign) {
    console.log(newVitalSign);
    return this.http
      .post<VitalSign>(this.url + '/' + pid + 'vitalsigns', newVitalSign)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  update(pid: number, updatedVitalSign: VitalSign) {
    return this.http
      .put<VitalSign>(this.url + '/' + pid + 'vitalsigns', updatedVitalSign)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  destroy(pid: number, vsId: number) {
    return this.http
      .delete<Patient>(this.url + '/' + pid + 'vitalsigns' + '/' + vsId)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  show(pid: number, vsId: number): Observable<VitalSign> {
    return this.http
      .get<VitalSign>(this.url + '/' + pid + 'vitalsigns' + '/' + vsId)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }
}
