import { Router } from "express";
import UserRouter from "../../modules/users/users.routes";
import AuthRouter from "../../modules/auth/auth.routes";
<<<<<<< HEAD
import MakeupRouter from "../../modules/makeup/makeup.routes";
import BrandRouter from  "../../modules/brand/brand.routes";
import CategoryRouter from "../../modules/category/category.routes"
import InventoryRoutes from "../../modules/inventory/inventory.routes";
import ReviewsRoutes from "../../modules/reviews/review.routes"

 
=======
import MakeupRouter from "../../modules/makeup/makeup.routes"; 

>>>>>>> 83861f7f3ba09c729eac251c6940e6726d5f428f
const router = Router();

router.use('/auth', AuthRouter);
router.use('/users', UserRouter);
router.use('/makeup', MakeupRouter); 
<<<<<<< HEAD
router.use('/brand', BrandRouter);
router.use('/category', CategoryRouter);
router.use('/inventory', InventoryRoutes);
router.use('/review', ReviewsRoutes);
=======
>>>>>>> 83861f7f3ba09c729eac251c6940e6726d5f428f

export default router;