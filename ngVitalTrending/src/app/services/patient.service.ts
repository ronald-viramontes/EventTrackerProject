import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Patient } from '../models/patient';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private baseUrl = 'http://localhost:8086/';
  private url = this.baseUrl + 'api/patients/';

  constructor(private http: HttpClient) {}

  index(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }
  create(newPatient: Patient) {
    console.log(newPatient);
    return this.http.post<Patient>(this.url, newPatient).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }

  update(id: number, patient: Patient) {
    return this.http.put<Patient>(this.url + id, patient).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }

  destroy(id: number) {
    return this.http.delete<Patient>(this.url + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }

  show(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.url + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }
}
