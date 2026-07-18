import { Router } from 'express';
import {
  getAllStorage,
  getStorageById,
  createStorage,
  updateStorage,
  deleteStorage,
} from '../controllers/storage.controller.js';
import { verifySession, verifyMember, verifyRole } from '../middlewares/auth.middleware.js';

const router = Router();

// All routes require an active session + valid member
router.use(verifySession, verifyMember);

// Read – any active member
router.get('/', getAllStorage);
router.get('/:id', getStorageById);

// Write – inventory_manager or coordinator
router.post('/', verifyRole('inventory_manager', 'coordinator'), createStorage);
router.patch('/:id', verifyRole('inventory_manager', 'coordinator'), updateStorage);
router.delete('/:id', verifyRole('inventory_manager', 'coordinator'), deleteStorage);

export default router;
