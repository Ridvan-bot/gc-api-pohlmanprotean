import { Request, Response, NextFunction } from 'express';
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
import jwt from 'jsonwebtoken';

// Load Google cloud secrets

const client = new SecretManagerServiceClient();

export const getSecrets = async (secretName: string, next: NextFunction) => {
  try {
    const [version] = await client.accessSecretVersion({
      name: `projects/dev-gc-api-pohlmanprotean/secrets/${secretName}/versions/latest`,
    });
    const payload = version.payload?.data?.toString();
    return payload;
}
catch (error) {
  next(error);
}
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  try {
    const jwtToken = await getSecrets('JWT_SECRET', next);
    if (username && password && jwtToken) {
      const token = jwt.sign({ username }, jwtToken, { 
          expiresIn: '1h'
        });
        res.json({ message: 'Login successful', token });
    }
    else {
      res.status(401).json({ message: 'Username or Password missing in request Unauthorized' });
    }
  }
  catch (error) {
    next(error);
  }
};
