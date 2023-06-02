export default class Tutor {
  id: number;
  name: string;
  phone: string;
  email: string;
  date_of_birth: string; // Ajustar posteriormente
  zip_code: string;

  private static nextId = 1;

  constructor(
    name: string,
    phone: string,
    email: string,
    date_of_birth: string,
    zip_code: string
  ) {
    this.id = Tutor.nextId++;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.date_of_birth = date_of_birth;
    this.zip_code = zip_code;
  }
}
