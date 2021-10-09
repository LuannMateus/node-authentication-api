import { Router, Request, Response, NextFunction } from 'express';
import { users } from '../utils/userMock';

const userRouter = Router();

userRouter.get('/users', (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json(users);
});

userRouter.get(
  '/users/:uuid',
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    const user = users.find(user => {
      return user.uuid === String(uuid);
    });

    if (!user) {
      return res.status(404).json({ message: "User don't exists!" });
    }

    return res.status(200).json(user);
  },
);

userRouter.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      message: 'The body is invalid!',
    });
  }

  users.push(body);

  return res.status(201).json(users);
});

userRouter.put(
  '/users/:uuid',
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const { body } = req;
    const { uuid } = req.params;

    if (!body) {
      return res.status(400).json({
        message: 'The body is invalid!',
      });
    }

    const user = users.find(user => {
      return user.uuid === String(uuid);
    });

    if (!user) {
      return res.status(404).json({ message: "User don't exists!" });
    }

    const updatedUser = { ...user, ...body };

    users.push(updatedUser);

    return res.status(201).json(updatedUser);
  },
);

export { userRouter };
