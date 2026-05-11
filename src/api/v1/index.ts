import { Router } from "express";
import UserRouter from "../../modules/users/users.routes";
import AuthRouter from "../../modules/auth/auth.routes";
import MakeupRouter from "../../modules/makeup/makeup.routes";
import BrandRouter from  "../../modules/brand/brand.routes";
import CategoryRouter from "../../modules/category/category.routes"
import InventoryRoutes from "../../modules/inventory/inventory.routes";
import ReviewsRoutes from "../../modules/reviews/review.routes"

 
const router = Router();

router.use('/auth', AuthRouter);
router.use('/users', UserRouter);
router.use('/makeup', MakeupRouter); 
router.use('/brand', BrandRouter);
router.use('/category', CategoryRouter);
router.use('/inventory', InventoryRoutes);
router.use('/review', ReviewsRoutes);

export default router;