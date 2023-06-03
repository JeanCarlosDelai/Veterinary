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

async function putPet(
  newPet: Pet,
  tutorId: number,
  petId: number
): Promise<Tutor | any | Pet> {
  return new Promise((resolve, reject) => {
    const indexTutor = tutors.findIndex((c) => c.id === tutorId);

    if (indexTutor >= 0) {
      const indexPet = tutors[indexTutor].pets.findIndex(
        (pet) => pet.id === petId
      );

      if (indexPet >= 0) {
        if (
          newPet.name &&
          tutors[indexTutor].pets[indexPet].name !== newPet.name
        )
          tutors[indexTutor].pets[indexPet].name = newPet.name;

        if (
          newPet.species &&
          tutors[indexTutor].pets[indexPet].species !== newPet.species
        )
          tutors[indexTutor].pets[indexPet].species = newPet.species;

        if (
          newPet.carry &&
          tutors[indexTutor].pets[indexPet].carry !== newPet.carry
        )
          tutors[indexTutor].pets[indexPet].carry = newPet.carry;

        if (
          newPet.weight &&
          tutors[indexTutor].pets[indexPet].weight !== newPet.weight
        )
          tutors[indexTutor].pets[indexPet].weight = newPet.weight;

        if (
          newPet.date_of_birth &&
          tutors[indexTutor].pets[indexPet].date_of_birth !==
            newPet.date_of_birth
        )
          tutors[indexTutor].pets[indexPet].date_of_birth =
            newPet.date_of_birth;

        return resolve(tutors[indexTutor].pets[indexPet]);
      }
    }
    return resolve(false);
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
  putPet,
  deletePet,
};
