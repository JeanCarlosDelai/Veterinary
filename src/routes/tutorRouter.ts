import express from "express";
import tutorController from "../controllers/tutorController";

const router = express.Router();

router.get("/tutors", tutorController.getTutors);

router.post("/tutor", tutorController.postTutor);

export default router;
