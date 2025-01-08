import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.JWT_SECRET) 
  throw new Error('Required environment variables is missing');

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  try {
    console.log('username', username);
  }
  catch (error) {
    next(error);
  }
};
