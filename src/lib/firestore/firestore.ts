
// import { gCloudAuth, firestoreConnect } from '../middleware/authentication';
// import { GoogleAuth } from 'google-auth-library';
// import { Firestore } from '@google-cloud/firestore';

import { Firestore } from '@google-cloud/firestore';
import { gCloudAuth } from '../middleware/authentication';

export let db: Firestore | null = null;

export const initializeFirestore = async () => {
  if (!db) {
    const auth = await gCloudAuth('dev-api-pohlmanprotean-service-account');
    if (!auth) {
      throw new Error('Failed to authenticate with Google Cloud');
    }
    db = new Firestore({
      projectId: 'dev-gc-api-pohlmanprotean',
      databaseId: 'dev-api-pohlmanprotean-db',
      credentials: await auth.getCredentials(),
    });
    console.log('Firestore initialized');
  }
  return db;
};

export const getFirestore = () => {
  if (!db) {
    throw new Error('Firestore has not been initialized. Call initializeFirestore first.');
  }
  return db;
};

// const createAndGet = async () => {
//   try {
//     const auth = await gCloudAuth('dev-api-pohlmanprotean-service-account');
//     if (!auth) {
//       throw new Error('Failed to authenticate with Google Cloud');
//     }
//     const db = await firestoreConnect('dev-gc-api-pohlmanprotean', 'dev-api-pohlmanprotean-db', auth);
//     if (db) {
//     const docRef = db.collection('users').doc('alovelace');
//     console.log('Setting document data...');
//     await docRef.set({
//       first: 'Ada',
//       last: 'Lovelace',
//       born: 1811
//   });
//   console.log('Document successfully written!');

//   const doc = await docRef.get();
//   if (doc.exists) {
//     console.log('User document data:', doc.data());
//   } else {
//     console.log('No such document!');
//   }
// }
//   }
// catch (error) {
//   console.error('Error adding or retrieving document: ', error);
// }

// }

// createAndGet();


// const runIfDb = async (auth: GoogleAuth , db: Firestore ) => {
//   try {
//     if (auth && db) {
//       const docRef = db.collection('users').doc('alovelace');
//       console.log('Setting document data...');
//       await docRef.set({
//         first: 'Ada',
//         last: 'Lovelace',
//         born: 1811

//     })}
//     else {
//       throw new Error('Failed to authenticate with Google Cloud or connect to Firestore');
//     };
//   }
//   catch (error) {
//     console.error('Error adding or retrieving document: ', error);
//   }
// }
