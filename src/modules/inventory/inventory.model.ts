import { ObjectId } from "mongodb";

export interface Inventory {
  _id?: ObjectId;
  productId: string;
  quantity: number;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
}