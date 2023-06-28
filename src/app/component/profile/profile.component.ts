import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/EmployeeService';
import { Employee } from 'src/app/model/employee';
import { ActivatedRoute, Router } from '@angular/router';
import Cookies from 'universal-cookie';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  id!: string | null;
  currentId!: string | null;
  salary!: string;
  user!: Employee;
  kpi!: string | null;
  link: string = '';
  hours!: string | null;
  role: string | null = localStorage.getItem('roleName');
  cookies: Cookies = new Cookies();

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
    this.currentId = localStorage.getItem('employeeId');
    this.role = localStorage.getItem('roleName');
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.userService.getById(this.id).subscribe({
      next: (res) => {
        this.hours = res.hours.toString();
        this.salary = res.money.toString();
        this.user = res;
        if (this.user.id == '18') {
          this.link =
            'https://media.monolithicpower.com/wysiwyg/employee-img1.png';
        }
        if (this.user.id == '17') {
          this.link =
            'https://cdn.mos.cms.futurecdn.net/Rvu47br3EoaSrWTbdqFc3b.jpg';
        }
        //this.link = 'https://play.min.io/restkeeper/' + this.user.photoPath;
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
    this.userService.getKpi(this.id).subscribe({
      next: (response) => {
        this.kpi = response.kpi.toString();
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

  delete() {
    this.userService.delete(this.id).subscribe({
      next: (res) => {
        alert('User is deleted successfully!');
        if (this.id == this.currentId) {
          localStorage.removeItem('employeeId');
          localStorage.removeItem('roleName');
          this.cookies.remove('access');
          this.cookies.remove('refresh');
          this.router.navigate(['/login']);
        }
        this.router.navigate(['/employees']);
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

  logout() {
    localStorage.removeItem('employeeId');
    localStorage.removeItem('roleName');
    this.cookies.remove('access');
    this.cookies.remove('refresh');
    this.router.navigate(['/login']);
  }
}
