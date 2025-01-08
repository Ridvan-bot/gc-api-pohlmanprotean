import { Request, Response, NextFunction } from 'express';
import { console } from 'inspector';


export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('updateUser');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
}

