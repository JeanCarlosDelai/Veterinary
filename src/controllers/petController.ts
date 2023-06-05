import { Request, Response } from 'express'
import Pet from '../models/pet'
import petRepository from '../repository/petRepository'
import asyncWrapper from '../middleware/async'

const postPet = asyncWrapper(async (req: Request, res: Response) => {
  const tutorId = req.params.tutorId
  const pet = req.body as Pet
  const result = await petRepository.postPet(parseInt(tutorId), pet)
  res.status(201).json(result)
})

const putPet = asyncWrapper(async (req: Request, res: Response) => {
  const tutorId = req.params.tutorId
  const petId = req.params.petId
  const pet = req.body as Pet
  const result = await petRepository.putPet(
    pet,
    parseInt(tutorId),
    parseInt(petId)
  )
  res.status(201).json(result)
})

const deletePet = asyncWrapper(async (req: Request, res: Response) => {
  const tutorId = req.params.tutorId
  const petId = req.params.petId
  const result = await petRepository.deletePet(
    parseInt(tutorId),
    parseInt(petId)
  )
  res.status(200).send(result)
})

export default {
  postPet,
  putPet,
  deletePet
}
