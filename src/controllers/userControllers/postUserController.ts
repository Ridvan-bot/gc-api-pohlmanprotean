import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { console } from 'inspector';
import { getFirestore } from '../../lib/firestore/firestore';
import { GoogleAuth } from 'google-auth-library';


export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, first , last, password } = req.body;
    const db = await getFirestore();
    const userRef = db.collection('users').doc(username);
        await userRef.set({
          username: username,
          first: first,
          last: last,
          password: password
          
      });
      const doc = await userRef.get();
      if (doc.exists) {
        res.status(200).json(doc.data());
      } else {
        console.log('No such user!');
        res.status(404).json({message: 'No such user!'});
      }
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