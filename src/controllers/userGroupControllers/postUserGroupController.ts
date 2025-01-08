import { Request, Response, NextFunction } from 'express';


export const createUserGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('createUserGroup');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};