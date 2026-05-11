import { Request, Response } from "express";
import * as service from "./makeup.service";

// 📥 Obtener todos
export const getAllMakeup = async (_req: Request, res: Response) => {
  try {
    const data = await service.getAllMakeup();
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// 📥 Obtener uno
export const getMakeupById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };
    const data = await service.getMakeupById(id);
    res.json(data);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

// ➕ Crear
export const createMakeup = async (req: Request, res: Response) => {
  try {
    const result = await service.createMakeup(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// ✏️ Actualizar
export const updateMakeup = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };
    const result = await service.updateMakeup(id, req.body);
    res.json({ message: "Actualizado correctamente", result });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// ❌ Eliminar
export const deleteMakeup = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };
    await service.deleteMakeup(id);
    res.json({ message: "Eliminado correctamente" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};