import { Request, Response, NextFunction } from 'express';

export const deleteRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('deleteRole');
      res.status(200).json({message: 'Future function'});
    } catch (error) {
      next(error)
    }
  };
