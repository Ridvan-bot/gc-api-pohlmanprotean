import { Request, Response, NextFunction } from 'express';


export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation Error', details: err.message });
    }
  
    if (err.name === 'UnauthorizedError') {
      return res.status(401).json({ message: 'Unauthorized', details: err.message });
    }
  
    if (err.name === 'NotFoundError') {
      return res.status(404).json({ message: 'Not Found', details: err.message });
    }
  
    res.status(500).json({ message: 'Internal Server Error', details: err.message });

};
