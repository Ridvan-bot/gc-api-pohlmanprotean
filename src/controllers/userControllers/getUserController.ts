import { Request, Response, NextFunction } from 'express';
import { getFirestore } from '../../lib/firestore/firestore';
import { GoogleAuth } from 'google-auth-library';

// Controller to get user profile
export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = getFirestore();
    const usersRef = db.collection('users');
    const snapshot = await usersRef.get();

    if (snapshot.empty) {
      res.status(404).json({ message: 'No users found!' });
      return;
    }

    const users: any[] = [];
    snapshot.forEach(doc => {
      users.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = getFirestore();
    const usersRef = db.collection('users');
    const snapshot = await usersRef.get();

    if (snapshot.empty) {
      res.status(404).json({ message: 'No users found!' });
      return;
    }

    const users: any[] = [];
    snapshot.forEach(doc => {
      users.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = await getFirestore();
    const userRef = db.collection('users').doc('ada.Lovelace');
        await userRef.set({
          first: 'Ada',
          last: 'Lovelace',
          born: 1813
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