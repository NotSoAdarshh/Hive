import { Router } from 'express';
import {
  createTransactionRequest,
  getAllTransactions,
  getMyTransactions,
  getTransactionById,
  approveTransaction,
  rejectTransaction,
  returnTransaction,
  markOverdueTransactions,
} from '../controllers/transaction.controller.js';
import { verifySession, verifyMember, verifyRole } from '../middlewares/auth.middleware.js';

const router = Router();

// All routes require an active session + valid member
router.use(verifySession, verifyMember);

// Member: create a request and view own history
router.post('/request', createTransactionRequest);
router.get('/my', getMyTransactions);

// Any member can view a specific transaction (controller restricts non-admin to own)
router.get('/:id', getTransactionById);

// Manager / coordinator: view all, approve, reject, return
router.get('/', verifyRole('inventory_manager', 'coordinator'), getAllTransactions);
router.patch('/:id/approve', verifyRole('inventory_manager', 'coordinator'), approveTransaction);
router.patch('/:id/reject', verifyRole('inventory_manager', 'coordinator'), rejectTransaction);
router.patch('/:id/return', verifyRole('inventory_manager', 'coordinator'), returnTransaction);

// Mark overdue – coordinator only (can also hook this up to a cron)
router.post('/mark-overdue', verifyRole('coordinator'), markOverdueTransactions);

export default router;
