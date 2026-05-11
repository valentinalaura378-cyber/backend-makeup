import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Category } from "./category.model";

const collection = () => getDb().collection<Category>("categories");

export const findAll = async () => collection().find().toArray();

export const findById = async (id: string) =>
  collection().findOne({ _id: new ObjectId(id) });

export const create = async (data: Category) => {
  data.createdAt = new Date();
  const result = await collection().insertOne(data);
  return { _id: result.insertedId, ...data };
};

export const update = async (id: string, data: Partial<Category>) =>
  collection().updateOne({ _id: new ObjectId(id) }, { $set: data });

export const remove = async (id: string) =>
  collection().deleteOne({ _id: new ObjectId(id) });