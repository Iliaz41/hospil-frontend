import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`https://localhost:44372/api/Employee`, {
      withCredentials: true,
    });
  }

  getStat(): Observable<any> {
    return this.http.get(
      `https://localhost:44372/api/Statistics/HospitalsStatistics`,
      {
        withCredentials: true,
      }
    );
  }

  getBySurname(surname: any): Observable<any> {
    return this.http.get(
      `https://localhost:44372/api/Employee/EmployeeBySurname`,
      {
        params: new HttpParams().set('surname', surname),
        withCredentials: true,
      }
    );
  }

  getById(id: any): Observable<any> {
    return this.http.get(`https://localhost:44372/api/Employee/${id}`, {
      withCredentials: true,
    });
  }

  getCardById(id: any): Observable<any> {
    return this.http.get(`https://localhost:44372/api/Employee/${id}/Cards`, {
      withCredentials: true,
    });
  }

  getRecord(id: any): Observable<any> {
    return this.http.get(`https://localhost:44372/api/Docx/1`, {
      withCredentials: true,
    });
  }

  getKpi(id: any): Observable<any> {
    return this.http.get(`https://localhost:44372/api/Employee/${id}/Kpi`, {
      withCredentials: true,
    });
  }
}
