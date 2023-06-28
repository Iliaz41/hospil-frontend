import { Employee } from './employee';
import { Patient } from './patient';

export class Appointment {
  id: string | null;
  dateTime: string | null;
  title: string | null;
  result: string | null;
  employeeId: string | null;
  patientId: string | null;
  employee: Employee;
  patient: Patient;

  constructor(
    id: string | null,
    dateTime: string | null,
    title: string | null,
    result: string | null,
    employeeId: string | null,
    patientId: string | null,
    employee: Employee,
    patient: Patient
  ) {
    this.id = id;
    this.dateTime = dateTime;
    this.title = title;
    this.result = result;
    this.patientId = patientId;
    this.employeeId = employeeId;
    this.employee = new Employee(
      null,
      employee.name,
      employee.surname,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );
    this.patient = new Patient(
      null,
      patient.name,
      patient.surname,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );
  }
}
