import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/service/CardService';
import { UserService } from 'src/app/service/EmployeeService';
import { Card } from 'src/app/model/card';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Cookies from 'universal-cookie';

@Component({
  selector: 'app-card',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.css'],
})
export class MyCardComponent implements OnInit {
  id!: string | null;
  currentId!: string | null;
  card!: Card;
  nameEmpl!: string | null;
  surnameEmpl!: string | null;
  namePat!: string | null;
  surnamePat!: string | null;
  cards: Card[] = [];
  link: string = ' ';
  role: string | null = localStorage.getItem('roleName');
  cookies: Cookies = new Cookies();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.cookies.get('access') == null) {
      localStorage.removeItem('userId');
      localStorage.removeItem('roleName');
      this.router.navigate(['/login']);
    }
    this.nameEmpl = 'Frank';
    this.surnameEmpl = 'Anthony';
    this.namePat = 'Jude';
    this.surnamePat = 'Bellingham';
    this.currentId = localStorage.getItem('employeeId');
    this.role = localStorage.getItem('roleName');
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.userService.getCardById(this.currentId).subscribe({
      next: (res) => {
        this.currentId = localStorage.getItem('employeeId');
        this.id = localStorage.getItem('employeeId');
        this.role = localStorage.getItem('roleName');
        this.cards = res;
        this.cards.forEach((card) => {
          card.employee.name = 'Frank';
          card.employee.surname = 'Anthony';
          card.patient.name = 'Jude';
          card.patient.surname = 'Bellingham';
        });
      },
    });
  }

  onSubmitForm() {}

  createrecord() {}

  open() {
    this.router.navigate(['/fullCard']);
  }

  update() {}

  logout() {
    localStorage.removeItem('employeeId');
    localStorage.removeItem('roleName');
    this.cookies.remove('access');
    this.cookies.remove('refresh');
    this.router.navigate(['/login']);
  }
}
