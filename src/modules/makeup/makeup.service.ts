import * as repo from "./makeup.repository";
import { Makeup } from "./makeup.model";

// Obtener todos
export const getAllMakeup = async () => {
  return await repo.findAll();
};

// Obtener uno
export const getMakeupById = async (id: string) => {
  const makeup = await repo.findById(id);
  if (!makeup) throw new Error("Makeup no encontrado");
  return makeup;
};

// Crear
export const createMakeup = async (data: Makeup) => {
  if (!data.name || !data.brand || !data.price) {
    throw new Error("Campos obligatorios faltantes");
  }
  return await repo.create(data);
};

// Actualizar
export const updateMakeup = async (id: string, data: Partial<Makeup>) => {
  return await repo.update(id, data);
};

// Eliminar
export const deleteMakeup = async (id: string) => {
  const makeup = await repo.findById(id);
  if (!makeup) throw new Error("Makeup no encontrado");

  await repo.remove(id);
};