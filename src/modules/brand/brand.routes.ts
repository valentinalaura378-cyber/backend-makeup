import { Router } from "express";
import {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand
} from "./brand.controller";

import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getAllBrands);
router.get("/:id", authMiddleware, getBrandById);
router.post("/", authMiddleware, createBrand);
router.put("/:id", authMiddleware, updateBrand);
router.delete("/:id", authMiddleware, deleteBrand);

export default router;