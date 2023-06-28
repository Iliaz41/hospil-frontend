import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/service/EmployeeService';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { ActivatedRoute, Router } from '@angular/router';
import Cookies from 'universal-cookie';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  findControl = new FormControl();
  id!: string | null;
  currentId!: string | null;
  user!: Employee;
  users: Employee[] = [];
  usersSearch: Employee[] = [];
  link: string = '';
  role: string | null = localStorage.getItem('roleName');
  cookies: Cookies = new Cookies();
  loginForm = new FormGroup({
    surname: new FormControl('', []),
  });

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.cookies.get('access') == null) {
      localStorage.removeItem('employeeId');
      localStorage.removeItem('roleName');
      this.router.navigate(['/login']);
    }
    this.userService.getAll().subscribe({
      next: (res) => {
        this.currentId = localStorage.getItem('employeeId');
        this.id = localStorage.getItem('employeeId');
        this.role = localStorage.getItem('roleName');
        this.users = res;
        this.users.forEach((user) => {
          if (user.role == '0') {
            user.role = 'Administrator';
          } else if (user.role == '1') {
            user.role = 'Doctor';
          } else if (user.role == '2') {
            user.role = 'Nurse';
          } else {
            user.role = 'Manager';
          }
        });
      },
    });
  }

  onSubmitForm() {
    let surname = this.loginForm.getRawValue();
    console.log(surname);
    let us: Employee[] = [];
    us = this.users;
    let use: Employee[] = [];
  }

  open() {}

  create() {
    this.router.navigate(['/register']);
  }

  logout() {
    localStorage.removeItem('employeeId');
    localStorage.removeItem('roleName');
    this.cookies.remove('access');
    this.cookies.remove('refresh');
    this.router.navigate(['/login']);
  }
}
