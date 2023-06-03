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

export default {
  postPet,
};
