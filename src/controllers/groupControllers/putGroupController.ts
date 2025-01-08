import { Request, Response, NextFunction } from 'express';


export const updateGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('updateGroup');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};