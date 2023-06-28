import { Employee } from './employee';
import { Patient } from './patient';

export class Card {
  id: string | null;
  diagnosys: string | null;
  description: string | null;
  date_in: string | null;
  date_out: string | null;
  employeeId: string | null;
  patientId: string | null;
  employee: Employee;
  patient: Patient;

  constructor(
    id: string | null,
    diagnosys: string | null,
    description: string | null,
    date_in: string | null,
    date_out: string | null,
    employeeId: string | null,
    patientId: string | null,
    employee: Employee,
    patient: Patient
  ) {
    this.id = id;
    this.diagnosys = diagnosys;
    this.description = description;
    this.date_in = date_in;
    this.date_out = date_out;
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
