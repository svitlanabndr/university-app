import { Router } from 'express';
import { getStudentsByGroup, getStudentsByContract, getStudentsByDiploma } from '../services/v1.service';

const router = Router();

router
  .get('/1', (req, res, next) => {
    getStudentsByGroup()
      .then((data) => res.send(data))
      .catch(next);
  })
  .get('/2', (req, res, next) => {
    getStudentsByContract()
      .then((data) => res.send(data))
      .catch(next);
  })
  .get('/3', (req, res, next) => {
    getStudentsByDiploma()
      .then((data) => res.send(data))
      .catch(next);
  })

export default router;
