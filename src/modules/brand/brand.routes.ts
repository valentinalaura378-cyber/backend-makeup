import { Router } from "express";
import { BrandController } from "./brand.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

const controller = new BrandController();

/**
 * @openapi
 * /brands:
 *   post:
 *     tags:
 *       - Brands
 *     summary: Crear marca
 *     description: Crear una nueva marca de maquillaje.
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
 *                 example: Maybelline
 *               country:
 *                 type: string
 *                 example: Estados Unidos
 *     responses:
 *       201:
 *         description: Marca creada correctamente
 */

router.post("/", authMiddleware, controller.create);

/**
 * @openapi
 * /brands:
 *   get:
 *     tags:
 *       - Brands
 *     summary: Obtener marcas
 *     description: Obtener todas las marcas registradas.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de marcas
 */

router.get("/", authMiddleware, controller.findAll);

/**
 * @openapi
 * /brands/{id}:
 *   get:
 *     tags:
 *       - Brands
 *     summary: Obtener marca por ID
 *     description: Obtener una marca específica por su ID.
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
 *         description: Marca encontrada
 *       404:
 *         description: Marca no encontrada
 */

router.get("/:id", authMiddleware, controller.findById);

/**
 * @openapi
 * /brands/{id}:
 *   put:
 *     tags:
 *       - Brands
 *     summary: Actualizar marca
 *     description: Actualizar una marca existente.
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
 *               name:
 *                 type: string
 *                 example: L'Oréal
 *               country:
 *                 type: string
 *                 example: Francia
 *     responses:
 *       200:
 *         description: Marca actualizada correctamente
 */

router.put("/:id", authMiddleware, controller.update);

/**
 * @openapi
 * /brands/{id}:
 *   delete:
 *     tags:
 *       - Brands
 *     summary: Eliminar marca
 *     description: Eliminar una marca por ID.
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
 *         description: Marca eliminada correctamente
 */

router.delete("/:id", authMiddleware, controller.delete);

export default router;