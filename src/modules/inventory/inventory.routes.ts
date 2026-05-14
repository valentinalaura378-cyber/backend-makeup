import { Router } from "express";
import { InventoryController } from "./inventory.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

const controller = new InventoryController();

/**
 * @openapi
 * /inventories:
 *   post:
 *     tags:
 *       - Inventories
 *     summary: Crear inventario
 *     description: Crear un nuevo registro de inventario.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productName:
 *                 type: string
 *                 example: Base Líquida
 *               quantity:
 *                 type: number
 *                 example: 50
 *               location:
 *                 type: string
 *                 example: Bodega Principal
 *     responses:
 *       201:
 *         description: Inventario creado correctamente
 */

router.post("/", authMiddleware, controller.create);

/**
 * @openapi
 * /inventories:
 *   get:
 *     tags:
 *       - Inventories
 *     summary: Obtener inventarios
 *     description: Obtener todos los registros de inventario.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de inventarios
 */

router.get("/", authMiddleware, controller.findAll);

/**
 * @openapi
 * /inventories/{id}:
 *   get:
 *     tags:
 *       - Inventories
 *     summary: Obtener inventario por ID
 *     description: Obtener un inventario específico.
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
 *         description: Inventario encontrado
 */

router.get("/:id", authMiddleware, controller.findById);

/**
 * @openapi
 * /inventories/{id}:
 *   put:
 *     tags:
 *       - Inventories
 *     summary: Actualizar inventario
 *     description: Actualizar un inventario existente.
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
 *         description: Inventario actualizado
 */

router.put("/:id", authMiddleware, controller.update);

/**
 * @openapi
 * /inventories/{id}:
 *   delete:
 *     tags:
 *       - Inventories
 *     summary: Eliminar inventario
 *     description: Eliminar un inventario por ID.
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
 *         description: Inventario eliminado
 */

router.delete("/:id", authMiddleware, controller.delete);

export default router;