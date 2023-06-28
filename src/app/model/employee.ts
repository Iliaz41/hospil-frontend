export class Employee {
  id: string | null;
  name: string | null;
  surname: string | null;
  email: string | null;
  passport: string | null;
  city: string | null;
  street: string | null;
  house: string | null;
  flat: string | null;
  role: string | null;
  phoneNumber: string | null;
  hours: string | null;
  money: string | null;
  loginTime: string | null;

  constructor(
    id: string | null,
    name: string | null,
    surname: string | null,
    email: string | null,
    passport: string | null,
    city: string | null,
    street: string | null,
    house: string | null,
    flat: string | null,
    role: string | null,
    phoneNumber: string | null,
    hours: string | null,
    money: string | null,
    loginTime: string | null
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.passport = passport;
    this.city = city;
    this.street = street;
    this.house = house;
    this.flat = flat;
    this.role = role;
    this.phoneNumber = phoneNumber;
    this.hours = hours;
    this.money = money;
    this.loginTime = loginTime;
  }
}
