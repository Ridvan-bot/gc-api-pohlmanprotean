import { Request, Response, NextFunction } from 'express';


export const deleteProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('deleteProfile');
      res.status(200).json({message: 'Future function'});
    } catch (error) {
      next(error)
    }
  };
