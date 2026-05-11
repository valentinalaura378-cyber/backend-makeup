import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Review } from "./review.model";

const collection = () => getDb().collection<Review>("reviews");

//Obtener todos
export const findAll = async () => {
  return await collection().find().toArray();
};

//Obtener por ID
export const findById = async (id: string) => {
  return await collection().findOne({ _id: new ObjectId(id) });
};

//Crear
export const create = async (data: Review) => {
  data.createdAt = new Date();
  const result = await collection().insertOne(data);
  return { _id: result.insertedId, ...data };
};

//Actualizar
export const update = async (id: string, data: Partial<Review>) => {
  return await collection().updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
};

//Eliminar
export const remove = async (id: string) => {
  return await collection().deleteOne({ _id: new ObjectId(id) });
};