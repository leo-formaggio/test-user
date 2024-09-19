import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).send('Acesso negado, nenhum Token fornecido.');
  }

  try {
    const decoded = jwt.verify(token, 'secret');
    (req as any).user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Token inválido.');
  }
};

export default authMiddleware;