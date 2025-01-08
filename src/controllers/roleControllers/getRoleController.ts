import { Request, Response, NextFunction } from 'express';

export const getRoles = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('getRoles');
      res.status(200).json({message: 'Future function'});
    } catch (error) {
      next(error)
    }
  };

  export const getRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('getRole');
      res.status(200).json({message: 'Future function'});
    } catch (error) {
      next(error)
    }
  };
