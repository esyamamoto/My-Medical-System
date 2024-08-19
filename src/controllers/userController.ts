import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import prisma from '../prismaClient';

export const createUser = async (req: Request, res: Response) => {
  const { username, password, role } = req.body;

  // Validação de entrada
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Verifica se o papel é válido
  if (!['admin', 'doctor', 'patient'].includes(role)) {
    return res.status(400).json({ message: 'Invalid role' });
  }

  try {
    // Hash da senha
    const passwordHash = await bcrypt.hash(password, 10);

    // Criação do usuário
    const user = await prisma.user.create({
      data: {
        username,
        password: passwordHash,
        role,
      },
    });

    // Resposta de sucesso
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
