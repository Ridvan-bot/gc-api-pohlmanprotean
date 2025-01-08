import { Router } from 'express';
import { getUsers} from '../controllers/userControllers/getUserController'; 
import authenticateToken from '../lib/middleware/authentication';

// Register routes
const router = Router();

router.get('/', authenticateToken, getUsers )

export default router;
