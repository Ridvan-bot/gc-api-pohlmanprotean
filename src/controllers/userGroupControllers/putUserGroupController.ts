import { Request, Response, NextFunction } from 'express';

export const updateUserGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('updateUserGroup');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};