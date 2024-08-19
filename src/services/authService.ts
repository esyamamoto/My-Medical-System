import { generateToken } from './auth';

export const generateUserToken = (user: { id: number; role: string }) => {
  return generateToken(user);
};
