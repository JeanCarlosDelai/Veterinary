import express from "express";
import tutorController from "../controllers/tutorController";

const router = express.Router();
router.get("/tutors", tutorController.getTutors);

export default router;
