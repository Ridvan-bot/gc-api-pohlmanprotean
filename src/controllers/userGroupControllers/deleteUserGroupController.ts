import { Request, Response, NextFunction } from 'express';

export const deleteUserGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('deleteUserGroup');
      res.status(200).json({message: 'Future function'});
    } catch (error) {
      next(error)
    }
  };
