import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index';
import { errorHandler } from './lib/errorHandling/errorHandler';
import { gCloudAuth, firestoreConnect } from './lib/middleware/authentication';
import { initializeFirestore } from './lib/firestore/firestore';


// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

// Use the logger middleware for all routes
import logger from './lib/middleware/logger';
app.use(logger);

// Middleware to parse JSON request bodies
app.use(express.json());

// Register all routes with a common prefix
app.use('/api/v1', routes);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Error handling middleware
app.use(errorHandler);

// Initialize Firestore before starting the server


initializeFirestore()
  .then(() => {
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/api/v1/welcome`);
    });
  })
  .catch((error) => {
    console.error('Failed to initialize Firestore:', error);
    process.exit(1); // Exit the process if Firestore initialization fails
  });


// code below works, but issue with db not being defined in getUsers
// (async () => {
//   try {
//     const auth = await gCloudAuth('dev-api-pohlmanprotean-service-account');
//     if (!auth) {
//       console.error('Failed to authenticate with Google Cloud');
//       process.exit(1);
//     }

//     // Access Firestore instance after initialization
//     const db = await firestoreConnect('dev-gc-api-pohlmanprotean', 'dev-api-pohlmanprotean-db', auth);
//     if (!db) {
//       console.error('Failed to connect to Firestore');
//       process.exit(1);
//     }
//     console.log('db:', db);

//     // Start the server
//     app.listen(PORT, () => {
//       console.log(`Server is running on http://localhost:${PORT}/api/v1/welcome`);
//     });
//   } catch (error) {
//     console.error('Failed to initialize Firestore:', error);
//     process.exit(1); // Exit the process if Firestore initialization fails
//   }
// })();
