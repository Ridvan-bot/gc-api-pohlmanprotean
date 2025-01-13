import { Request, Response, NextFunction } from 'express';
import { getFirestore } from '../../lib/firestore/firestore';
// Controller to get user profile
export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('getUser');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};

export const getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('getUsers');
    const db = getFirestore();
    const usersSnapshot = await db.collection('users').get();
    const users = usersSnapshot.docs.map(doc => doc.data());

    if (users.length > 0) {
      console.log('Users:', users);
      return res.status(200).json(users);
    } else {
      return res.status(404).json({ message: 'No users found' });
    }
  } catch (error) {
    next(error);
  }
};