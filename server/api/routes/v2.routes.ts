import { Router } from 'express';
import { getStudentsByGroup } from '../services/v2.service';

const router = Router();

router
  .get('/1', (req, res, next) => {
    getStudentsByGroup()
      .then((data) => res.send(data))
      .catch(next);
  })
  // .get('/2', (req, res, next) => {
  //   seedData()
  //     .then((data) => res.send(data))
  //     .catch(next);
  // })
  // .get('/3', (req, res, next) => {
  //   seedData()
  //     .then((data) => res.send(data))
  //     .catch(next);
  // })

export default router;
