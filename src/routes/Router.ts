import express from 'express'
import petController from '../controllers/petController'
import tutorController from '../controllers/tutorController'

const router = express.Router()

// Rotas Tutores

router.get('/tutors', tutorController.getTutors)

router.post('/tutor', tutorController.postTutor)

router.put('/tutor/:id', tutorController.putTutor)

router.delete('/tutor/:id', tutorController.deleteTutor)

// Rotas Pets

router.post('/pet/:tutorId', petController.postPet)

router.delete('/pet/:petId/tutor/:tutorId', petController.deletePet)

router.put('/pet/:petId/tutor/:tutorId', petController.putPet)

export default router
