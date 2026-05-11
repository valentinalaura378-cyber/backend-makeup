import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Brand } from "./brand.model";

const collection = () => getDb().collection<Brand>("brands");

//Obtener todos
export const findAll = async () => {
  return await collection().find().toArray();
};

//Obtener por ID
export const findById = async (id: string) => {
  return await collection().findOne({ _id: new ObjectId(id) });
};

//Crear
export const create = async (data: Brand) => {
  data.createdAt = new Date();
  const result = await collection().insertOne(data);
  return { _id: result.insertedId, ...data };
};

//Actualizar
export const update = async (id: string, data: Partial<Brand>) => {
  return await collection().updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
};

//Eliminar
export const remove = async (id: string) => {
  return await collection().deleteOne({ _id: new ObjectId(id) });
};