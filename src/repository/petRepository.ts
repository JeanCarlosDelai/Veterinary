import Pet from '../models/pet'
import tutors from '../repository/tutors'
import { createCustomError } from '../errors/custom-error'

async function postPet(tutorId: number, pet: Pet): Promise<Pet> {
  return new Promise((resolve, reject) => {
    if (
      !pet.name ||
      !pet.species ||
      !pet.carry ||
      !pet.weight ||
      !pet.date_of_birth
    )
      return reject(
        createCustomError('Campos obrigatórios não preenchidos', 400)
      )

    const index = tutors.findIndex((c) => c.id === tutorId)

    if (index >= 0) {
      const existingPet = tutors[index].pets.find((p) => p.name === pet.name)

      if (existingPet) {
        return reject(createCustomError('Pet já cadastrado', 400))
      }
      const newPet = new Pet(
        pet.name,
        pet.species,
        pet.carry,
        pet.weight,
        pet.date_of_birth
      )

      tutors[index].pets.push(newPet)

      return resolve(newPet)
    }

    return reject(createCustomError('Tutor não encontrado', 400))
  })
}

async function putPet(
  newPet: Pet,
  tutorId: number,
  petId: number
): Promise<Pet> {
  return new Promise((resolve, reject) => {
    const indexTutor = tutors.findIndex((c) => c.id === tutorId)

    if (indexTutor >= 0) {
      const indexPet = tutors[indexTutor].pets.findIndex(
        (pet) => pet.id === petId
      )

      if (indexPet >= 0) {
        if (
          newPet.name &&
          tutors[indexTutor].pets[indexPet].name !== newPet.name
        )
          tutors[indexTutor].pets[indexPet].name = newPet.name

        if (
          newPet.species &&
          tutors[indexTutor].pets[indexPet].species !== newPet.species
        )
          tutors[indexTutor].pets[indexPet].species = newPet.species

        if (
          newPet.carry &&
          tutors[indexTutor].pets[indexPet].carry !== newPet.carry
        )
          tutors[indexTutor].pets[indexPet].carry = newPet.carry

        if (
          newPet.weight &&
          tutors[indexTutor].pets[indexPet].weight !== newPet.weight
        )
          tutors[indexTutor].pets[indexPet].weight = newPet.weight

        if (
          newPet.date_of_birth &&
          tutors[indexTutor].pets[indexPet].date_of_birth !==
          newPet.date_of_birth
        )
          tutors[indexTutor].pets[indexPet].date_of_birth = newPet.date_of_birth

        return resolve(tutors[indexTutor].pets[indexPet])
      }
    }
    return reject(createCustomError('Tutor ou Pet não encontrado', 400))
  })
}

async function deletePet(tutorId: number, petId: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const indexTutor = tutors.findIndex((c) => c.id === tutorId)

    if (indexTutor >= 0) {
      const indexPet = tutors[indexTutor].pets.findIndex(
        (pet) => pet.id === petId
      )

      if (indexPet >= 0) {
        tutors[indexTutor].pets.splice(indexPet, 1)
        return resolve('Status code 200')
      }
    }
    return reject(createCustomError('Tutor ou Pet não cadastrado', 400))
  })
}

export default {
  postPet,
  putPet,
  deletePet
}
