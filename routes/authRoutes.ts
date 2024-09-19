import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
const prisma = new PrismaClient();

interface AuthRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

router.post('/register', async (req: AuthRequest, res: Response) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });
    res.json(user);
  } catch (error) {
    res.status(400).send('Erro ao registrar usuário');
  }
});

router.post('/login', async (req: AuthRequest, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user.id }, 'secret');
      res.json({ token });
    } else {
      res.status(401).send('Dados inválidos!');
    }
  } catch (error) {
    res.status(400).send('Erro ao fazer login');
  }
});

export default router;