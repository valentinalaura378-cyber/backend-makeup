import {
  Request,
  Response,
  NextFunction,
} from "express";

import { ReviewService } from "./review.service";

export class ReviewController {
  private service = new ReviewService();

  // Crear
  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.service.create(req.body);

      res.status(201).json(data);
    } catch (error: any) {
      next(error);
    }
  };

  // Obtener todas
  findAll = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.service.findAll();

      res.status(200).json(data);
    } catch (error: any) {
      next(error);
    }
  };

  // Obtener por ID
  findById = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;

      const data = await this.service.findById(id);

      res.status(200).json(data);
    } catch (error: any) {
      next(error);
    }
  };

  // Actualizar
  update = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;

      const data = await this.service.update(
        id,
        req.body
      );

      res.status(200).json(data);
    } catch (error: any) {
      next(error);
    }
  };

  // Eliminar
  delete = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;

      const data = await this.service.delete(id);

      res.status(200).json(data);
    } catch (error: any) {
      next(error);
    }
  };
}