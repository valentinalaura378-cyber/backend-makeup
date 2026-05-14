import { Router } from "express";
import { MakeupController } from "./makeup.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

const controller = new MakeupController();

/**
 * @openapi
 * /makeups:
 *   post:
 *     tags:
 *       - Makeups
 *     summary: Crear producto makeup
 *     description: Crear un nuevo producto de maquillaje.
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
 *                 example: Labial Mate
 *               price:
 *                 type: number
 *                 example: 35000
 *               brand:
 *                 type: string
 *                 example: Maybelline
 *               category:
 *                 type: string
 *                 example: Labiales
 *               stock:
 *                 type: number
 *                 example: 20
 *     responses:
 *       201:
 *         description: Makeup creado correctamente
 */

router.post("/", authMiddleware, controller.create);

/**
 * @openapi
 * /makeups:
 *   get:
 *     tags:
 *       - Makeups
 *     summary: Obtener makeups
 *     description: Obtener todos los productos makeup.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de makeups
 */

router.get("/", authMiddleware, controller.findAll);

/**
 * @openapi
 * /makeups/{id}:
 *   get:
 *     tags:
 *       - Makeups
 *     summary: Obtener makeup por ID
 *     description: Obtener un producto makeup específico.
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
 *         description: Makeup encontrado
 */

router.get("/:id", authMiddleware, controller.findById);

/**
 * @openapi
 * /makeups/{id}:
 *   put:
 *     tags:
 *       - Makeups
 *     summary: Actualizar makeup
 *     description: Actualizar un producto makeup.
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
 *         description: Makeup actualizado
 */

router.put("/:id", authMiddleware, controller.update);

/**
 * @openapi
 * /makeups/{id}:
 *   delete:
 *     tags:
 *       - Makeups
 *     summary: Eliminar makeup
 *     description: Eliminar un producto makeup.
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
 *         description: Makeup eliminado
 */

router.delete("/:id", authMiddleware, controller.delete);

export default router;