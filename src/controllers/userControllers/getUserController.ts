import { Request, Response, NextFunction } from 'express';


// Controller to get user profile
export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('getUser');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};

export const getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('getUserByUsername');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('getUsers');
    res.status(200).json({message: 'Future function'});
  } catch (error) {
next(error);
  }
};