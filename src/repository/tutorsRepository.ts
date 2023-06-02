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
export default {
  getTutors,
};
