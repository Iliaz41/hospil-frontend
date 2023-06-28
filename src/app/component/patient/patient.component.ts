import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Cookies from 'universal-cookie';
import { PatientService } from 'src/app/service/PatientService';
import { Patient } from 'src/app/model/patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  id!: string | null;
  currentId!: string | null;
  patient!: Patient;
  patients: Patient[] = [];
  link: string = ' ';
  role: string | null = localStorage.getItem('roleName');
  cookies: Cookies = new Cookies();
  patientCreateForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    surname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    passport: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    street: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
    house: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
    flat: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    room: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
    dateOfBirth: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
  });

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.cookies.get('access') == null) {
      localStorage.removeItem('userId');
      localStorage.removeItem('roleName');
      this.router.navigate(['/login']);
    }
    this.patientService.getAll().subscribe({
      next: (res) => {
        this.currentId = localStorage.getItem('employeeId');
        this.id = localStorage.getItem('employeeId');
        this.role = localStorage.getItem('roleName');
        this.patients = res;
        this.patients.forEach((patient) => {});
      },
    });
  }

  onSubmitForm() {
    this.patientService.create(this.patientCreateForm).subscribe({
      next: (res) => {
        this.router.navigate([`/patient`]);
        alert('New patient is added sucessfully!');
        this.ngOnInit();
      },
      error: (response) => {
        if (
          response.status === 400 ||
          response.status === 401 ||
          response.status === 404
        ) {
          alert(response.error.msg);
        }
        if (response.status >= 500) {
          alert('something happened on the server');
        }
      },
    });
  }

  open() {}

  update() {}

  logout() {
    localStorage.removeItem('employeeId');
    localStorage.removeItem('roleName');
    this.cookies.remove('access');
    this.cookies.remove('refresh');
    this.router.navigate(['/login']);
  }
}
