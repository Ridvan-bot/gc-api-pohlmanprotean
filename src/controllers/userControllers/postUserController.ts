import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { console } from 'inspector';


export const register = async (req: Request, res: Response, next: NextFunction) => {

  try {
    console.log('register');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response,  next: NextFunction) => {

  try {
    console.log('login');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};

export const createProfile = async (req: Request, res: Response, next: NextFunction) => {


  try {

    console.log('createProfile');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};