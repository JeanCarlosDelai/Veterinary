import Pet from "../models/pet";
import Tutor from "../models/tutor";
import tutors from "../repository/tutors";

async function postPet(tutorId: number, pet: Pet): Promise<Tutor | any> {
  return new Promise((resolve, reject) => {
    if (
      !pet.name ||
      !pet.species ||
      !pet.carry ||
      !pet.weight ||
      !pet.date_of_birth
    )
      return resolve("Dados inválidos, por favor tente novamente");

    const index = tutors.findIndex((c) => c.id === tutorId);

    if (index >= 0) {
      const newPet = new Pet(
        pet.name,
        pet.species,
        pet.carry,
        pet.weight,
        pet.date_of_birth
      );

      tutors[index].pets.push(newPet);

      return resolve(newPet);
    }

    return resolve("Tutor não encontrado");
  });
}

async function deletePet(tutorId: number, petId: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const indexTutor = tutors.findIndex((c) => c.id === tutorId);

    if (indexTutor >= 0) {
      const indexPet = tutors[indexTutor].pets.findIndex(
        (pet) => pet.id === petId
      );

      if (indexPet >= 0) {
        tutors[indexTutor].pets.splice(indexPet, 1);
        return resolve(true);
      }
    }
    return resolve(false);
  });
}

export default {
  postPet,
  deletePet,
};
