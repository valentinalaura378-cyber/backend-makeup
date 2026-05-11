import { Request, Response } from "express";
import * as service from "./brand.service";

//Obtener todos
export const getAllBrands = async (_req: Request, res: Response) => {
  try {
    const data = await service.getAllBrands();
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//Obtener uno
export const getBrandById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const data = await service.getBrandById(id);
    res.json(data);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

//Crear
export const createBrand = async (req: Request, res: Response) => {
  try {
    const result = await service.createBrand(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

//Actualizar
export const updateBrand = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const result = await service.updateBrand(id, req.body);
    res.json({ message: "Actualizado correctamente", result });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

//Eliminar
export const deleteBrand = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const { id } = req.params;
    await service.deleteBrand(id);
    res.json({ message: "Eliminado correctamente" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};