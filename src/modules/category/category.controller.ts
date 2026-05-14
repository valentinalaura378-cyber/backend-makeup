import {
  Request,
  Response,
  NextFunction,
} from "express";

import { CategoryService } from "./category.service";

export class CategoryController {
  private service = new CategoryService();

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
      const { id } = req.params;

      const data = await this.service.findById(id);

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