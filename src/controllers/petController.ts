import { NextFunction, Request, Response } from "express";
import Pet from "../models/pet";
import petRepository from "../repository/petRepository";

async function postPet(req: Request, res: Response, next: NextFunction) {
  const tutorId = req.params.tutorId;
  const pet = req.body as Pet;
  const result = await petRepository.postPet(parseInt(tutorId), pet);
  if (result) res.status(201).json(result);
  else res.json(result);
}

export default {
  postPet,
};
