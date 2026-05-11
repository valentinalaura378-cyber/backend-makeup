import { Request, Response } from "express";
import * as service from "./inventory.service";

type ParamsId = {
  id: string;
};

//Obtener todos
export const getAllInventory = async (_req: Request, res: Response) => {
  try {
    const data = await service.getAllInventory();
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//Obtener uno
export const getInventoryById = async (
  req: Request<ParamsId>,
  res: Response
) => {
  try {
    const { id } = req.params;

    const data = await service.getInventoryById(id);
    res.json(data);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

//Crear
export const createInventory = async (req: Request, res: Response) => {
  try {
    console.log("BODY:", req.body);

    const result = await service.createInventory(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

//Actualizar
export const updateInventory = async (
  req: Request<ParamsId>,
  res: Response
) => {
  try {
    const { id } = req.params;

    const result = await service.updateInventory(id, req.body);
    res.json({ message: "Actualizado correctamente", result });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

//Eliminar
export const deleteInventory = async (
  req: Request<ParamsId>,
  res: Response
) => {
  try {
    const { id } = req.params;

    await service.deleteInventory(id);
    res.json({ message: "Eliminado correctamente" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};