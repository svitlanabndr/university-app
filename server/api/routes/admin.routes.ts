import { Router } from 'express';
import { seedData } from '../services/admin.service';

const router = Router();

router
  .post('/', (req, res, next) => {
    seedData()
      .then((data) => res.send(data))
      .catch(next);
  })

export default router;
