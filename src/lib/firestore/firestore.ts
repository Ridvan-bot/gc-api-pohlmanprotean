import admin from 'firebase-admin';
import { Request, Response, NextFunction } from 'express';
import { Firestore } from "@google-cloud/firestore";
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
import { getSecrets } from 'lib/middleware/authentication';
const client = new SecretManagerServiceClient();


export const dblogin = async (next: NextFunction) => {
    try {
        const serviceAccount = await getSecrets('dev-api-pohlmanprotean-service-account', next);

if (serviceAccount) {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(serviceAccount))
    });
  }
} catch (error) {
  console.error('Failed to initialize Firestore:', error);
  next(error);
}
};


export const db = admin.firestore();