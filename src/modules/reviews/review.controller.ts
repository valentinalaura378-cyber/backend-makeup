import { Request, Response } from "express";
import * as service from "./review.service";

//Obtener todos
export const getAllReviews = async (_req: Request, res: Response) => {
  try {
    const data = await service.getAllReviews();
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//Obtener uno
export const getReviewById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const data = await service.getReviewById(req.params.id);
    res.json(data);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

//Crear
export const createReview = async (req: Request, res: Response) => {
  try {
    const result = await service.createReview(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

//Actualizar
export const updateReview = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const result = await service.updateReview(req.params.id, req.body);
    res.json({ message: "Actualizado correctamente", result });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

//Eliminar
export const deleteReview = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    await service.deleteReview(req.params.id);
    res.json({ message: "Eliminado correctamente" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};