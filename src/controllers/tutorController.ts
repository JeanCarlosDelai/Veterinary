import { NextFunction, Request, Response } from "express";
import tutorRepository from "../repository/tutorsRepository";

async function getTutors(req: Request, res: Response, next: NextFunction) {
  const tutors = await tutorRepository.getTutors();
  res.json(tutors);
}

export default {
  getTutors,
};
