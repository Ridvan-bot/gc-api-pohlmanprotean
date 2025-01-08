import { Request, Response, NextFunction } from 'express';


export const createGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('createGroup');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};