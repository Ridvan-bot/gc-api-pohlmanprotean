import { Request, Response, NextFunction } from 'express';

export const getProfiles = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('getProfiles');
      res.status(200).json({message: 'Future function'});
    } catch (error) {
      next(error)
    }
  };

  export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('getProfile');
      res.status(200).json({message: 'Future function'});
    } catch (error) {
      next(error)
    }
  };
