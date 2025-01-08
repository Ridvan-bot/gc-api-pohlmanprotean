import { Request, Response, NextFunction } from 'express';

export const getGroups = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('getGroups');
      res.status(200).json({message: 'Future function'});
    } catch (error) {
      next(error)
    }
  };

  export const getGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('getGroup');
      res.status(200).json({message: 'Future function'});
    } catch (error) {
      next(error)
    }
  };
