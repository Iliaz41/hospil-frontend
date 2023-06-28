import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/service/CardService';
import { UserService } from 'src/app/service/EmployeeService';
import { Card } from 'src/app/model/card';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Cookies from 'universal-cookie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  id!: string | null;
  currentId!: string | null;
  card!: Card;
  cards: Card[] = [];
  link: string = ' ';
  role: string | null = localStorage.getItem('roleName');
  cookies: Cookies = new Cookies();
  cardCreateForm = new FormGroup({
    diagnosys: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    date_in: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    date_out: new FormControl('', [
      Validators.minLength(8),
      Validators.maxLength(20),
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
    private cardService: CardService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.cookies.get('access') == null) {
      localStorage.removeItem('userId');
      localStorage.removeItem('roleName');
      this.router.navigate(['/login']);
    }
    this.cardService.getAll().subscribe({
      next: (res) => {
        this.currentId = localStorage.getItem('employeeId');
        this.id = localStorage.getItem('employeeId');
        this.role = localStorage.getItem('roleName');
        this.cards = res;
        this.cards.forEach((card) => {});
      },
    });
  }

  onSubmitForm() {}

  open() {
    this.router.navigate(['/fullCard']);
  }

  update() {}

  createrecord() {
    this.userService.getRecord(5).subscribe({
      next: (res) => {},
    });
  }

  logout() {
    localStorage.removeItem('employeeId');
    localStorage.removeItem('roleName');
    this.cookies.remove('access');
    this.cookies.remove('refresh');
    this.router.navigate(['/login']);
  }
}
