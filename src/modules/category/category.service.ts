import * as repo from "./category.repository";
import { Category } from "./category.model";

export const getAllCategories = async () => repo.findAll();

export const getCategoryById = async (id: string) => {
  const data = await repo.findById(id);
  if (!data) throw new Error("Categoría no encontrada");
  return data;
};

export const createCategory = async (data: Category) => {
  if (!data.name) throw new Error("Nombre obligatorio");
  return repo.create(data);
};

export const updateCategory = async (id: string, data: Partial<Category>) =>
  repo.update(id, data);

export const deleteCategory = async (id: string) => {
  const data = await repo.findById(id);
  if (!data) throw new Error("Categoría no encontrada");
  return repo.remove(id);
};