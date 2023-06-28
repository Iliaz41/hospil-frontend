import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import Cookies from 'universal-cookie';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css'],
})
export class ProfileUpdateComponent implements OnInit {
  id!: string;
  user!: Employee;
  currentId!: string | null;
  role: string | null = localStorage.getItem('roleName');
  cookies: Cookies = new Cookies();
  updateForm = new FormGroup({
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
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    dateOfBirth: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/[789][0-9]{9}/),
    ]),
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    house: new FormControl('', [Validators.required]),
    flat: new FormControl(''),
    photo: new FormControl(new File([], '')),
  });

  photoForm = new FormGroup({
    photo: new FormControl(new File([], '')),
  });

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.cookies.get('access') == null) {
      localStorage.removeItem('userId');
      localStorage.removeItem('roleName');
      this.router.navigate(['/login']);
    }
    this.currentId = localStorage.getItem('userId');
    this.route.params.subscribe((params) => (this.id = params['id']));
  }

  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('roleName');
    this.cookies.remove('access');
    this.cookies.remove('refresh');
    this.router.navigate(['/login']);
  }
}
