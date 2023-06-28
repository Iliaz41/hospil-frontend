import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ProfileComponent } from './component/profile/profile.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { PatientComponent } from './component/patient/patient.component';
import { ProfileUpdateComponent } from './component/profile-update/profile-update.component';
import { EmployeeComponent } from './component/employees/employee.component';
import { MyCardComponent } from './component/mycard/mycard.component';
import { StatComponent } from './component/stat/stat.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'card', component: CardComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'profile/:id/update', component: ProfileUpdateComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'mycards', component: MyCardComponent },
  { path: 'statistics', component: StatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
