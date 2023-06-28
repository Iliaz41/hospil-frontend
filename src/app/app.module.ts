import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { CardComponent } from './component/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthApiService } from './service/AuthApiService';
import { AuthInterceptor } from './interseptor/interseptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './component/registration/registration.component';
import { HomeComponent } from './component/home/home.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { UserService } from './service/EmployeeService';
import { CardService } from './service/CardService';
import { AppointmentService } from './service/AppointmentService';
import { PatientService } from './service/PatientService';
import { PatientComponent } from './component/patient/patient.component';
import { EmployeeComponent } from './component/employees/employee.component';
import { MyCardComponent } from './component/mycard/mycard.component';
import { StatComponent } from './component/stat/stat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    CardComponent,
    AppointmentComponent,
    PatientComponent,
    EmployeeComponent,
    MyCardComponent,
    StatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthApiService,
    UserService,
    CardService,
    AppointmentService,
    PatientService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
