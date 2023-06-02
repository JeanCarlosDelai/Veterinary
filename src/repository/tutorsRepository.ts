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
export default {
  getTutors,
  postTutor,
};
