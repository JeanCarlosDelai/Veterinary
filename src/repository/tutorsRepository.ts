import Tutor from "../models/tutor";

const tutors: Tutor[] = [
  {
    id: 1,
    name: "Jean Carlos",
    phone: "99058249",
    email: "jean_vieceli@outllok.com",
    date_of_birth: "2000-01-12 10:10",
    zip_code: "98726000",
  },
];

// Retorna todos
async function getTutors(): Promise<Tutor[]> {
  return new Promise((resolve, reject) => {
    return resolve(tutors);
  });
}

async function postTutor(tutor: Tutor): Promise<Tutor> {
  return new Promise((resolve, reject) => {
    if (!tutor.name || !tutor.email) return reject(new Error(`Invalid Tutor.`));

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

      if (newTutor.email && tutors[index].email !== newTutor.email)
        tutors[index].email = newTutor.email;

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
