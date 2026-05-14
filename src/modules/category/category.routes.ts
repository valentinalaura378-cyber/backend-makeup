import { Router } from "express";
import { CategoryController } from "./category.controller";

import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

const controller = new CategoryController();

/**
 * @openapi
 * /categories:
 *   post:
 *     tags:
 *       - Categories
 *     summary: Crear categoría
 *     description: Crear una nueva categoría.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Labiales
 *               description:
 *                 type: string
 *                 example: Productos para labios
 *     responses:
 *       201:
 *         description: Categoría creada correctamente
 */

router.post("/", authMiddleware, controller.create);

/**
 * @openapi
 * /categories:
 *   get:
 *     tags:
 *       - Categories
 *     summary: Obtener categorías
 *     description: Obtener todas las categorías.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de categorías
 */

router.get("/", authMiddleware, controller.findAll);

/**
 * @openapi
 * /categories/{id}:
 *   get:
 *     tags:
 *       - Categories
 *     summary: Obtener categoría por ID
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
 *         description: Categoría encontrada
 */

router.get("/:id", authMiddleware, controller.findById);

/**
 * @openapi
 * /categories/{id}:
 *   put:
 *     tags:
 *       - Categories
 *     summary: Actualizar categoría
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
 *         description: Categoría actualizada
 */

router.put("/:id", authMiddleware, controller.update);

/**
 * @openapi
 * /categories/{id}:
 *   delete:
 *     tags:
 *       - Categories
 *     summary: Eliminar categoría
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
 *         description: Categoría eliminada
 */

router.delete("/:id", authMiddleware, controller.delete);

export default router;