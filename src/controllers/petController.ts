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

async function deletePet(req: Request, res: Response, next: NextFunction) {
  const tutorId = req.params.tutorId;
  const petId = req.params.petId;
  const result = await petRepository.deletePet(
    parseInt(tutorId),
    parseInt(petId)
  );
  if (result) res.status(200).send("status code 200");
  else res.status(400).send("status code 400");
}

export default {
  postPet,
  deletePet,
};
