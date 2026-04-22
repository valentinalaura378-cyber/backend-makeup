import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Makeup } from "./makeup.model";

const collection = () => getDb().collection<Makeup>("makeup");

// 📥 Obtener todos
export const findAll = async () => {
  return await collection().find().toArray();
};

// 📥 Obtener por ID
export const findById = async (id: string) => {
  return await collection().findOne({ _id: new ObjectId(id) });
};

// ➕ Crear
export const create = async (data: Makeup) => {
  data.createdAt = new Date();
  const result = await collection().insertOne(data);
  return { _id: result.insertedId, ...data };
};

// ✏️ Actualizar
export const update = async (id: string, data: Partial<Makeup>) => {
  return await collection().updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
};

// ❌ Eliminar
export const remove = async (id: string) => {
  return await collection().deleteOne({ _id: new ObjectId(id) });
};