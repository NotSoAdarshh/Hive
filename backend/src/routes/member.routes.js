import { Router } from 'express';
import {
  getAllMembers,
  getMemberById,
  createMember,
  toggleMemberActive,
  changeMemberRole,
  deleteMember,
  getMyProfile,
} from '../controllers/member.controller.js';
import { verifySession, verifyMember, verifyRole } from '../middlewares/auth.middleware.js';

const router = Router();

// All routes require an active session + valid member
router.use(verifySession, verifyMember);

// Own profile – any authenticated member
router.get('/me', getMyProfile);

// Coordinator-only routes
router.get('/', verifyRole('coordinator', 'inventory_manager'), getAllMembers);
router.get('/:id', verifyRole('coordinator', 'inventory_manager'), getMemberById);
router.post('/', verifyRole('coordinator'), createMember);
router.patch('/:id/toggle-active', verifyRole('coordinator'), toggleMemberActive);
router.patch('/:id/role', verifyRole('coordinator'), changeMemberRole);
router.delete('/:id', verifyRole('coordinator'), deleteMember);

export default router;
