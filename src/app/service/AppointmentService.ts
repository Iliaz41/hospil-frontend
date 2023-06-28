import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';

@Injectable()
export class AppointmentService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`https://localhost:44372/api/Appointment`, {
      withCredentials: true,
    });
  }

  getById(id: any): Observable<any> {
    return this.http.get(`https://localhost:7277/api/Appointment/${id}`, {
      withCredentials: true,
    });
  }
}
