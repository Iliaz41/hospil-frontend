import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Card } from '../model/card';

@Injectable()
export class CardService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`https://localhost:44372/api/Card`, {
      withCredentials: true,
    });
  }

  getById(id: any): Observable<any> {
    return this.http.get(`https://localhost:7277/api/Employee/${id}`, {
      withCredentials: true,
    });
  }
}
