export default class Pet {
  id: number;
  name: string;
  species: string;
  carry: string;
  weight: number;
  date_of_birth: string;
  private static nextId = 1;

  constructor(
    name: string,
    species: string,
    carry: string,
    weight: number,
    date_of_birth: string
  ) {
    this.id = Pet.nextId++;
    this.name = name;
    this.species = species;
    this.carry = carry;
    this.weight = weight;
    this.date_of_birth = date_of_birth;
  }
}
