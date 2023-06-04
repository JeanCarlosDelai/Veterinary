import Tutor from "../models/tutor";
import tutors from "./tutors";

// Retorna todos
async function getTutors(): Promise<Tutor[]> {
  return new Promise((resolve, reject) => {
    return resolve(tutors);
  });
}

async function postTutor(tutor: Tutor): Promise<Tutor | undefined | string> {
  return new Promise((resolve, reject) => {
    if (
      !tutor.name ||
      !tutor.phone ||
      !tutor.email ||
      !tutor.date_of_birth ||
      !tutor.zip_code
    )
      return resolve("Dados inválidos, por favor tente novamente");

    const newTutor = new Tutor(
      tutor.name,
      tutor.phone,
      tutor.email,
      tutor.date_of_birth,
      tutor.zip_code
    );

    tutors.push(newTutor);

    return resolve(newTutor);
  });
}

async function putTutor(
  id: number,
  newTutor: Tutor
): Promise<Tutor | undefined> {
  return new Promise((resolve, reject) => {
    const index = tutors.findIndex((c) => c.id === id);
    if (index >= 0) {
      if (newTutor.name && tutors[index].name !== newTutor.name)
        tutors[index].name = newTutor.name;

      if (newTutor.phone && tutors[index].phone !== newTutor.phone)
        tutors[index].phone = newTutor.phone;

      if (newTutor.email && tutors[index].email !== newTutor.email)
        tutors[index].email = newTutor.email;

      if (
        newTutor.date_of_birth &&
        tutors[index].date_of_birth !== newTutor.date_of_birth
      )
        tutors[index].date_of_birth = newTutor.date_of_birth;

      if (newTutor.zip_code && tutors[index].zip_code !== newTutor.zip_code)
        tutors[index].zip_code = newTutor.zip_code;

      return resolve(tutors[index]);
    }

    return resolve(undefined);
  });
}

async function deleteTutor(id: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const index = tutors.findIndex((c) => c.id === id);

    if (index >= 0) {
      tutors.splice(index, 1);
      return resolve(true);
    }

    return resolve(false);
  });
}

export default {
  getTutors,
  postTutor,
  putTutor,
  deleteTutor,
};
