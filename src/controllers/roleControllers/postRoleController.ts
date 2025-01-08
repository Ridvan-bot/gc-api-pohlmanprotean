import { Request, Response, NextFunction } from 'express';


export const createRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('createRole');
      res.status(200).json({message: 'Future function'});
        } catch (error) {
      next(error)
    }
  };
