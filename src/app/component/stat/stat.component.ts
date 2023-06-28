import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/service/CardService';
import { UserService } from 'src/app/service/EmployeeService';
import { Card } from 'src/app/model/card';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Cookies from 'universal-cookie';

@Component({
  selector: 'app-card',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css'],
})
export class StatComponent implements OnInit {
  id!: string | null;
  currentId!: string | null;
  empl!: string | null;
  pat!: string | null;
  app!: string | null;
  card!: string | null;
  aver!: string | null;
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
    this.currentId = localStorage.getItem('employeeId');
    this.role = localStorage.getItem('roleName');
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.userService.getStat().subscribe({
      next: (res) => {
        this.empl = '15';
        this.pat = '8';
        this.card = '6';
        this.app = '4';
        this.aver = '7.28';
      },
    });
  }

  onSubmitForm() {}

  exportStat() {}

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
