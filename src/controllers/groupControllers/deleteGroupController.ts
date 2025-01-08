import { Request, Response, NextFunction } from 'express';



export const deleteGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
console.log('deleteGroup');
res.status(200).json({message: 'Future function'});
    } catch (error) {
      next(error)
    }
  };
