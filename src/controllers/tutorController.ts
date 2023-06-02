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

export default {
  getTutors,
  postTutor,
};
