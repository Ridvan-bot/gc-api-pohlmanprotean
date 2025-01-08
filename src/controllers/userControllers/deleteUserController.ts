import { Request, Response, NextFunction } from 'express';

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {


  try {
    console.log('deleteUser');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};



