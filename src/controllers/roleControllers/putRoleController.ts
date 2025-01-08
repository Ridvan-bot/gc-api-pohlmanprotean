import { Request, Response, NextFunction } from 'express';

export const updateRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('updateRole');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};