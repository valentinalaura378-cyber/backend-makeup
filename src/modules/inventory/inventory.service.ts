import * as repo from "./inventory.repository";
import { Inventory } from "./inventory.model";

// Obtener todos
export const getAllInventory = async () => {
  return await repo.findAll();
};

// Obtener uno
export const getInventoryById = async (id: string) => {
  const data = await repo.findById(id);

  if (!data) {
    throw new Error("Inventory no encontrado");
  }

  return data;
};

// Crear
export const createInventory = async (data: Inventory) => {
  console.log("DATA EN SERVICE:", data);

  const productId = data?.productId;
  const quantity = Number(data?.quantity);
  const location = data?.location;

  if (!productId || !location || isNaN(quantity)) {
    throw new Error("Campos obligatorios faltantes");
  }

  return await repo.create({
    productId,
    quantity,
    location,
    createdAt: new Date()
  });
};

// Actualizar
export const updateInventory = async (id: string, data: Partial<Inventory>) => {
  const existing = await repo.findById(id);

  if (!existing) {
    throw new Error("Inventory no encontrado");
  }

  return await repo.update(id, {
    ...data,
    updatedAt: new Date()
  });
};

// Eliminar
export const deleteInventory = async (id: string) => {
  const existing = await repo.findById(id);

  if (!existing) {
    throw new Error("Inventory no encontrado");
  }

  await repo.remove(id);
};