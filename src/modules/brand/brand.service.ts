import * as repo from "./brand.repository";
import { Brand } from "./brand.model";

// Obtener todos
export const getAllBrands = async () => {
  return await repo.findAll();
};

// Obtener uno
export const getBrandById = async (id: string) => {
  const brand = await repo.findById(id);
  if (!brand) throw new Error("Brand no encontrada");
  return brand;
};

// Crear
export const createBrand = async (data: Brand) => {
  if (!data.name) throw new Error("Nombre obligatorio");
  return await repo.create(data);
};

// Actualizar
export const updateBrand = async (id: string, data: Partial<Brand>) => {
  return await repo.update(id, data);
};

// Eliminar
export const deleteBrand = async (id: string) => {
  const brand = await repo.findById(id);
  if (!brand) throw new Error("Brand no encontrada");

  await repo.remove(id);
};