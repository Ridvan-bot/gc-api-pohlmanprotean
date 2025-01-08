import { Request, Response, NextFunction } from 'express';

export const createProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('createProfile');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};