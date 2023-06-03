import { NextFunction, Request, Response } from "express";
import Tutor from "../models/tutor";
import tutorRepository from "../repository/tutorsRepository";

async function getTutors(req: Request, res: Response, next: NextFunction) {
  const tutors = await tutorRepository.getTutors();
  res.json(tutors);
}

async function postTutor(req: Request, res: Response, next: NextFunction) {
  const tutor = req.body as Tutor;
  const result = await tutorRepository.postTutor(tutor);
  if (result) res.status(201).json(result);
  else res.sendStatus(400);
}

async function putTutor(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  const tutors = req.body as Tutor;
  const result = await tutorRepository.putTutor(parseInt(id), tutors);
  if (result) res.json(result);
  else res.sendStatus(404);
}

async function deleteTutor(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  const success = await tutorRepository.deleteTutor(parseInt(id));
  if (success) {
    res.sendStatus(200);
  } else res.sendStatus(404);
}

export default {
  getTutors,
  postTutor,
  putTutor,
  deleteTutor,
};
