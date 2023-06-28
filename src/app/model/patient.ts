export class Patient {
  id: string | null;
  name: string | null;
  surname: string | null;
  passport: string | null;
  city: string | null;
  street: string | null;
  house: string | null;
  flat: string | null;
  dateOfBirth: string | null;
  room: string | null;
  phoneNumber: string | null;

  constructor(
    id: string | null,
    name: string | null,
    surname: string | null,
    passport: string | null,
    city: string | null,
    street: string | null,
    house: string | null,
    flat: string | null,
    dateOfBirth: string | null,
    phoneNumber: string | null,
    room: string | null
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.passport = passport;
    this.city = city;
    this.street = street;
    this.house = house;
    this.flat = flat;
    this.phoneNumber = phoneNumber;
    this.dateOfBirth = dateOfBirth;
    this.room = room;
  }
}
