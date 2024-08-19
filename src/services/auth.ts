import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../prismaClient';

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET || 'your-secret-key'; // Use a variável de ambiente para a chave secreta

// Função para criar um hash da senha
export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, saltRounds);
};

// Função para verificar uma senha
export const comparePassword = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

// Função para gerar um token JWT
export const generateToken = (user: { id: number; role: string }) => {
  return jwt.sign(
    { userId: user.id, role: user.role },
    jwtSecret,
    { expiresIn: '1h' }
  );
};

// Função para verificar um token JWT
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    return null;
  }
};

// Função para criar um novo usuário
export const createUser = async (username: string, password: string, role: string) => {
  const hashedPassword = await hashPassword(password);
  return prisma.user.create({
    data: {
      username,
      password: hashedPassword,
      role
    }
  });
};

// Função para encontrar um usuário
export const findUser = async (username: string) => {
  return prisma.user.findUnique({ where: { username } });
};
