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
  constructor(private httpClient: HttpClient) {}

  index(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }
}
