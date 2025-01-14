import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
import { GoogleAuth } from 'google-auth-library';
import { Firestore } from '@google-cloud/firestore';

let db: Firestore | undefined;

// Load environment variables
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

  export const getSecretsNoNext = async (secretName: string) => {
    try {
      const [version] = await client.accessSecretVersion({
        name: `projects/dev-gc-api-pohlmanprotean/secrets/${secretName}/versions/latest`,
      });
      const payload = version.payload?.data?.toString();
      return payload;
  }
  catch (error) {
  console.error('Error retrieving secret:', error);
  }
  }


// Middleware function to validate JWT
const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
    // Get the token from the Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract token part
 
    // If no token, respond with an unauthorized status
    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No token provided' });
    }
    const jwtKey = await getSecrets('JWT_SECRET', next);

    // Verify the token using the secret key
    jwt.verify(token, jwtKey as string , (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid Token' }); // Forbidden if token is invalid
        }
        // Attach user information to the request object
        req.user = user;
        next(); // Call next middleware or route handler
    });
    }
    catch (error) {
    next(error);
    }
};



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

export const gCloudAuth = async (secretName: string) => {
  try {
    console.log('Fetching service account secret...');
    const secret = await getSecretsNoNext(secretName);
    if (!secret) {
      throw new Error('Failed to retrieve service account secret');
    }
    const credentials = JSON.parse(secret);
    const auth = new GoogleAuth({
      credentials: {
        client_email: credentials.client_email,
        private_key: credentials.private_key,
      },
      scopes: ['https://www.googleapis.com/auth/cloud-platform']
    });
    return auth as GoogleAuth;
  } catch (error) {
    console.error('Error logging in: ', error);
  }
}

export const firestoreConnect = async ( projectId: string, databaseId: string, auth: GoogleAuth) => {
  try {
    const credentials = await auth.getCredentials();
    const db = new Firestore({
      projectId: projectId,
      databaseId: databaseId,
      credentials: {
        client_email: credentials.client_email,
        private_key: credentials.private_key,
      }
    });
    console.log('Connecting to Firestore...');
    return db as Firestore;
  } catch (error) {
    console.error('Error adding or retrieving document: ', error);
  }
};

export const getFirestore = async () => {
  if (!db) {
    throw new Error('Firestore not initialized');
  }
  return db;
}


export default authenticateToken;