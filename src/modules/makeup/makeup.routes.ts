import { Router } from "express";
import {
  getAllMakeup,
  getMakeupById,
  createMakeup,
  updateMakeup,
  deleteMakeup
} from "./makeup.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getAllMakeup);
router.get("/:id", authMiddleware, getMakeupById);
router.post("/", authMiddleware, createMakeup);
router.put("/:id", authMiddleware, updateMakeup);
router.delete("/:id", authMiddleware, deleteMakeup);

export default router;