import { Request, Response } from "express";
import Pet from "../models/pet";
import petRepository from "../repository/petRepository";

async function postPet(req: Request, res: Response) {
  const tutorId = req.params.tutorId;
  const pet = req.body as Pet;
  const result = await petRepository.postPet(parseInt(tutorId), pet);
  if (result) res.status(201).json(result);
  else res.status(400).send("Informações inválidas");
}

async function putPet(req: Request, res: Response) {
  const tutorId = req.params.tutorId;
  const petId = req.params.petId;
  const pet = req.body as Pet;
  const result = await petRepository.putPet(
    pet,
    parseInt(tutorId),
    parseInt(petId)
  );
  if (result) res.status(201).json(result);
  else res.status(400).send("Informações inválidas");
}

async function deletePet(req: Request, res: Response) {
  const tutorId = req.params.tutorId;
  const petId = req.params.petId;
  const result = await petRepository.deletePet(
    parseInt(tutorId),
    parseInt(petId)
  );
  if (result) res.status(200).send("status code 200");
  else res.status(400).send("Informações inválidas");
}

export default {
  postPet,
  putPet,
  deletePet,
};
