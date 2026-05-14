import { Router } from "express";
import { ReviewController } from "./review.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

const controller = new ReviewController();

/**
 * @openapi
 * /reviews:
 *   post:
 *     tags:
 *       - Reviews
 *     summary: Crear review
 *     description: Crear una nueva reseña.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 example: Alison
 *               comment:
 *                 type: string
 *                 example: Excelente producto
 *               rating:
 *                 type: number
 *                 example: 5
 *     responses:
 *       201:
 *         description: Review creada correctamente
 */

router.post("/", authMiddleware, controller.create);

/**
 * @openapi
 * /reviews:
 *   get:
 *     tags:
 *       - Reviews
 *     summary: Obtener reviews
 *     description: Obtener todas las reseñas.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de reviews
 */

router.get("/", authMiddleware, controller.findAll);

/**
 * @openapi
 * /reviews/{id}:
 *   get:
 *     tags:
 *       - Reviews
 *     summary: Obtener review por ID
 *     description: Obtener una review específica.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review encontrada
 */

router.get("/:id", authMiddleware, controller.findById);

/**
 * @openapi
 * /reviews/{id}:
 *   put:
 *     tags:
 *       - Reviews
 *     summary: Actualizar review
 *     description: Actualizar una review existente.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 example: Alison
 *               comment:
 *                 type: string
 *                 example: Muy buen maquillaje
 *               rating:
 *                 type: number
 *                 example: 4
 *     responses:
 *       200:
 *         description: Review actualizada correctamente
 */

router.put("/:id", authMiddleware, controller.update);

/**
 * @openapi
 * /reviews/{id}:
 *   delete:
 *     tags:
 *       - Reviews
 *     summary: Eliminar review
 *     description: Eliminar una review por ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review eliminada correctamente
 */

router.delete("/:id", authMiddleware, controller.delete);

export default router;