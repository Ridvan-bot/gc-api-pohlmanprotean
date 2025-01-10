import { Router } from 'express';
import { login } from '../lib/middleware/authentication';

const router = Router();

router.post('/login', login);

export default router;