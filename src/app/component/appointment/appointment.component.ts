import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/AppointmentService';
import { Card } from 'src/app/model/card';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Cookies from 'universal-cookie';
import { Appointment } from 'src/app/model/appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  id!: string | null;
  currentId!: string | null;
  apointment!: Appointment;
  appointments: Appointment[] = [];
  link: string = ' ';
  role: string | null = localStorage.getItem('roleName');
  cookies: Cookies = new Cookies();
  appointmentCreateForm = new FormGroup({
    date: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    employee: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
    patient: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
  });

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.cookies.get('access') == null) {
      localStorage.removeItem('userId');
      localStorage.removeItem('roleName');
      this.router.navigate(['/login']);
    }
    this.appointmentService.getAll().subscribe({
      next: (res) => {
        this.currentId = localStorage.getItem('employeeId');
        this.id = localStorage.getItem('employeeId');
        this.role = localStorage.getItem('roleName');
        this.appointments = res;
        this.appointments.forEach((appointment) => {});
      },
    });
  }

  onSubmitForm() {}

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
