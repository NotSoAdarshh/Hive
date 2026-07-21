import { Router } from 'express';
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  setItemPolicy,
} from '../controllers/inventory.controller.js';
import { verifySession, verifyMember, verifyRole } from '../middlewares/auth.middleware.js';
import { upload } from '../utils/cloudinary.js';

const router = Router();

// All routes require an active session + valid member
router.use(verifySession, verifyMember);

// Read – any active member
router.get('/', getAllItems);
router.get('/:id', getItemById);

// Write – inventory_manager only (coordinator must also be inventory_manager to do this)
router.post('/', verifyRole('inventory_manager', 'coordinator'), upload.single('image'), createItem);
router.patch('/:id', verifyRole('inventory_manager', 'coordinator'), upload.single('image'), updateItem);
router.delete('/:id', verifyRole('inventory_manager', 'coordinator'), deleteItem);

// Policy – coordinator only
router.patch('/:id/policy', verifyRole('coordinator'), setItemPolicy);

export default router;
