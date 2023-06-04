import { Request, Response } from "express";
import Tutor from "../models/tutor";
import tutorRepository from "../repository/tutorsRepository";

async function getTutors(req: Request, res: Response) {
  const tutors = await tutorRepository.getTutors();
  res.status(200).json(tutors);
}

async function postTutor(req: Request, res: Response) {
  const tutor = req.body as Tutor;
  const result = await tutorRepository.postTutor(tutor);
  if (result) res.status(201).json(result);
  else res.status(400).send("Informações inválidas");
}

async function putTutor(req: Request, res: Response) {
  const id = req.params.id;
  const tutors = req.body as Tutor;
  const result = await tutorRepository.putTutor(parseInt(id), tutors);
  if (result) res.status(201).json(result);
  else res.status(400).send("Informações inválidas");
}

async function deleteTutor(req: Request, res: Response) {
  const id = req.params.id;
  const result = await tutorRepository.deleteTutor(parseInt(id));
  if (result) res.status(200).send("status code 200");
  else res.status(400).send("Tutor não encontrado");
}

export default {
  getTutors,
  postTutor,
  putTutor,
  deleteTutor,
};
