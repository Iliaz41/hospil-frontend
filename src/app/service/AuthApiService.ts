import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import Cookies from 'universal-cookie';

@Injectable()
export class AuthApiService {
  constructor(private http: HttpClient) {}

  login(loginForm: FormGroup): Observable<any> {
    let user = loginForm.getRawValue();
    console.log(user);
    return this.http.post(`https://localhost:44372/api/Auth/LogIn`, user, {
      withCredentials: true,
    });
  }

  register(registerForm: FormGroup): Observable<any> {
    let user = JSON.stringify(registerForm.getRawValue());
    return this.http.post(
      `https://localhost:44372/api/Auth/Registration`,
      user
    );
  }
}
