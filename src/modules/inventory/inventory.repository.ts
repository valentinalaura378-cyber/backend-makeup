import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Inventory } from "./inventory.model";

const collection = () => getDb().collection<Inventory>("inventory");

//Obtener todos
export const findAll = async () => {
  return await collection().find().toArray();
};

//Obtener por ID
export const findById = async (id: string) => {
  return await collection().findOne({ _id: new ObjectId(id) });
};

//Buscar por makeupId
export const findByMakeupId = async (makeupId: string) => {
  return await collection().findOne({ makeupId: new ObjectId(makeupId) });
};

//Crear
export const create = async (data: Inventory) => {
  data.updatedAt = new Date();
  const result = await collection().insertOne(data);
  return { _id: result.insertedId, ...data };
};

//Actualizar stock
export const update = async (id: string, data: Partial<Inventory>) => {
  data.updatedAt = new Date();
  return await collection().updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
};

//Eliminar
export const remove = async (id: string) => {
  return await collection().deleteOne({ _id: new ObjectId(id) });
};