import Tutor from "../models/tutor";

const tutors: Tutor[] = [
  {
    id: 1,
    name: "Jean Carlos",
    phone: "99058249",
    email: "jean_vieceli@outllok.com",
    date_of_birth: "2000-01-12 10:10",
    zip_code: "98726000",
    pets: [
      {
        id: 1,
        name: "Anakim",
        species: "Pintcher",
        carry: "p",
        weight: 4,
        date_of_birth: "2021-11-25 10:10",
      },
    ],
  },
];

export default tutors;
