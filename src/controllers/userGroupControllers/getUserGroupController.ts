import { Request, Response, NextFunction } from 'express';

export const getUserGroups = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('getUserGroups');
      res.status(200).json({message: 'Future function'});
    } catch (error) {
      next(error)
    }
  };

  export const getUserGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('getUserGroup');
      res.status(200).json({message: 'Future function'});
    } catch (error) {
      next(error)
    }
  };
