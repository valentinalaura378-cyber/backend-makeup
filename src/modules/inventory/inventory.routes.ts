import { Router } from "express";
import {
  getAllInventory,
  getInventoryById,
  createInventory,
  updateInventory,
  deleteInventory
} from "./inventory.controller";

import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getAllInventory);
router.get("/:id", authMiddleware, getInventoryById);
router.post("/", authMiddleware, createInventory);
router.put("/:id", authMiddleware, updateInventory);
router.delete("/:id", authMiddleware, deleteInventory);

export default router;