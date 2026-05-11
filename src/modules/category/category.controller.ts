import { Request, Response } from "express";
import * as service from "./category.service";

//Obtener todos
export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    res.json(await service.getAllCategories());
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};

//Obtener uno
export const getCategoryById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    res.json(await service.getCategoryById(req.params.id));
  } catch (e: any) {
    res.status(404).json({ message: e.message });
  }
};

//Crear
export const createCategory = async (req: Request, res: Response) => {
  try {
    res.status(201).json(await service.createCategory(req.body));
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
};

//Actualizar
export const updateCategory = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    res.json(await service.updateCategory(req.params.id, req.body));
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
};

//Eliminar
export const deleteCategory = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    await service.deleteCategory(req.params.id);
    res.json({ message: "Eliminado correctamente" });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
};