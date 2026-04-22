import { Router } from "express";
import UserRouter from "../../modules/users/users.routes";
import AuthRouter from "../../modules/auth/auth.routes";
import MakeupRouter from "../../modules/makeup/makeup.routes"; 

const router = Router();

router.use('/auth', AuthRouter);
router.use('/users', UserRouter);
router.use('/makeup', MakeupRouter); 

export default router;