import { Request, Response, NextFunction } from 'express';


export const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('updateProfile');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};