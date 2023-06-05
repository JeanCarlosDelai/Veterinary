import { Request, Response } from 'express'
import Tutor from '../models/tutor'
import tutorRepository from '../repository/tutorsRepository'
import asyncWrapper from '../middleware/async'

const getTutors = asyncWrapper(async (req: Request, res: Response) => {
  const tutors = await tutorRepository.getTutors()
  res.status(200).json(tutors)
})

const postTutor = asyncWrapper(async (req: Request, res: Response) => {
  const tutor = req.body as Tutor
  const result = await tutorRepository.postTutor(tutor)
  res.status(201).json(result)
})

const putTutor = asyncWrapper(async (req: Request, res: Response) => {
  const id = req.params.id
  const tutors = req.body as Tutor
  const result = await tutorRepository.putTutor(parseInt(id), tutors)
  res.status(201).json(result)
})

const deleteTutor = asyncWrapper(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await tutorRepository.deleteTutor(parseInt(id))
  res.status(200).send(result)
})

export default {
  getTutors,
  postTutor,
  putTutor,
  deleteTutor
}
