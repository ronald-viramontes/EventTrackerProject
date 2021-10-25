import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MedicalHistory } from '../models/medical-history';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistoryService {
  constructor(private http: HttpClient, private currentRoute: ActivatedRoute) {}

  patientIndex(id: number): Observable<MedicalHistory[]> {
    return this.http
      .get<MedicalHistory[]>(
        `http://localhost:8086/api/patients/${id}/medicalhistory/`
      )
      .pipe(
        catchError((error: any) => {
          console.error('Error retrieving patient family medical history');
          return throwError(error);
        })
      );
  }
}
