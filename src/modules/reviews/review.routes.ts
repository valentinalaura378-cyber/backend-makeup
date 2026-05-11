import { Router } from "express";
import {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview
} from "./review.controller";

import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getAllReviews);
router.get("/:id", authMiddleware, getReviewById);
router.post("/", authMiddleware, createReview);
router.put("/:id", authMiddleware, updateReview);
router.delete("/:id", authMiddleware, deleteReview);

export default router;