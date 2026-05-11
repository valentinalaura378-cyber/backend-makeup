import { Router } from "express";
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from "./category.controller";

import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getAllCategories);
router.get("/:id", authMiddleware, getCategoryById);
router.post("/", authMiddleware, createCategory);
router.put("/:id", authMiddleware, updateCategory);
router.delete("/:id", authMiddleware, deleteCategory);

export default router;