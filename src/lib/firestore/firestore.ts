import admin from 'firebase-admin';
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
import { getSecretsNoNext } from '../middleware/authentication';
import { firestore } from 'firebase-admin';

// Initialize Firestore
const db = new Firestore({
  projectId: 'dev-gc-api-pohlmanprotean',
});

const client = new SecretManagerServiceClient();
let firestore: admin.firestore.Firestore;

export const dblogin = async (): Promise<void> => {
  try {
    const serviceAccount = await getSecretsNoNext('dev-api-pohlmanprotean-service-account');

    if (serviceAccount) {
      admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(serviceAccount)),
        databaseURL: 'https://firestore.googleapis.com/v1/projects/dev-gc-api-pohlmanprotean/databases/dev-api-pohlmanprotean-db/documents'
      });
      firestore = admin.firestore(); // Assign the Firestore instance
    } else {
      throw new Error('Service account not found');
    }
  } catch (error) {
    console.error('Failed to initialize Firestore:', error);
    throw error;
  }
};

export const getFirestore = (): admin.firestore.Firestore => {
  if (!firestore) {
    throw new Error('Firestore is not initialized. Call dblogin() first.');
  }
  return firestore;
};