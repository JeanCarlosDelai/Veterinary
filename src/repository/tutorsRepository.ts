import Tutor from '../models/tutor'
import tutors from './tutors'
import { createCustomError } from '../errors/custom-error'

// Retorna todos
async function getTutors(): Promise<Tutor[]> {
  return new Promise((resolve, reject) => {
    if (tutors) {
      resolve(tutors)
    } else {
      return reject(createCustomError('Não foi possível obter os tutores', 400))
    }
  })
}

async function postTutor(tutor: Tutor): Promise<Tutor | number> {
  return new Promise((resolve, reject) => {
    if (
      !tutor.name ||
      !tutor.phone ||
      !tutor.email ||
      !tutor.date_of_birth ||
      !tutor.zip_code
    )
      return reject(
        createCustomError('Campos obrigatórios não preenchidos', 400)
      )
    const tutorExists = tutors.some(
      (existingTutor) => existingTutor.name === tutor.name
    )
    if (tutorExists) {
      return reject(createCustomError('Tutor já cadastrado', 400))
    }

    const newTutor = new Tutor(
      tutor.name,
      tutor.phone,
      tutor.email,
      tutor.date_of_birth,
      tutor.zip_code
    )

    tutors.push(newTutor)

    return resolve(newTutor)
  })
}

async function putTutor(id: number, newTutor: Tutor): Promise<Tutor> {
  return new Promise((resolve, reject) => {
    const index = tutors.findIndex((c) => c.id === id)
    if (index >= 0) {
      if (newTutor.name && tutors[index].name !== newTutor.name)
        tutors[index].name = newTutor.name

      if (newTutor.phone && tutors[index].phone !== newTutor.phone)
        tutors[index].phone = newTutor.phone

      if (newTutor.email && tutors[index].email !== newTutor.email)
        tutors[index].email = newTutor.email

      if (
        newTutor.date_of_birth &&
        tutors[index].date_of_birth !== newTutor.date_of_birth
      )
        tutors[index].date_of_birth = newTutor.date_of_birth

      if (newTutor.zip_code && tutors[index].zip_code !== newTutor.zip_code)
        tutors[index].zip_code = newTutor.zip_code

      return resolve(tutors[index])
    }

    return reject(createCustomError('Tutor não cadastrado', 400))
  })
}

async function deleteTutor(id: number): Promise<boolean | any> {
  return new Promise((resolve, reject) => {
    const index = tutors.findIndex((c) => c.id === id)

    if (index >= 0) {
      tutors.splice(index, 1)
      return resolve('Status code 200')
    }
    return reject(createCustomError('Tutor não cadastrado', 400))
  })
}

export default {
  getTutors,
  postTutor,
  putTutor,
  deleteTutor
}
