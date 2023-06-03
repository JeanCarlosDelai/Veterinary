import express from "express";
import petController from "../controllers/petController";
import tutorController from "../controllers/tutorController";

const router = express.Router();

router.get("/tutors", tutorController.getTutors);

router.post("/tutor", tutorController.postTutor);

router.put("/tutor/:id", tutorController.putTutor);

router.delete("/tutor/:id", tutorController.deleteTutor);

router.post("/pet/:tutorId", petController.postPet);

export default router;
