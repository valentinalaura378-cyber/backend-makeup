import {
  Request,
  Response,
  NextFunction,
} from "express";

import { InventoryService } from "./inventory.service";

export class InventoryController {
  private service = new InventoryService();

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

  findById = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.service.findById(
        req.params.id
      );

      res.status(200).json(data);
    } catch (error: any) {
      next(error);
    }
  };

  update = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.service.update(
        req.params.id,
        req.body
      );

      res.status(200).json(data);
    } catch (error: any) {
      next(error);
    }
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.service.delete(
        req.params.id
      );

      res.status(200).json(data);
    } catch (error: any) {
      next(error);
    }
  };
}