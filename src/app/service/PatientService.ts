import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient';

@Injectable()
export class PatientService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`https://localhost:44372/api/Patient`, {
      withCredentials: true,
    });
  }

  create(patientCreateForm: FormGroup): Observable<any> {
    let user = JSON.stringify(patientCreateForm.getRawValue());
    return this.http.post(`https://localhost:44372/api/Patient`, user);
  }

  getById(id: any): Observable<any> {
    return this.http.get(`https://localhost:7277/api/Employee/${id}`, {
      withCredentials: true,
    });
  }
}
