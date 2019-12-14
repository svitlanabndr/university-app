import { Router } from 'express';
import * as userService from '../services/user.service';
import { IUser } from '../../common/models/user/IUser';

const router = Router();

router
  .get('/', (req, res, next) => {
    userService
      .checkEmailExist({ email: req.query.email })
      .then((data) => res.send(data))
      .catch(next);
  })
  .put('/', (req: { body: Partial<IUser>, [key: string]: any }, res, next) => {
    userService
      .updateUser(req.body, req.user.id)
      .then((data) => res.send(data))
      .catch(next);
  })

export default router;
