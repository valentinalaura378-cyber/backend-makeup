import { ObjectId } from "mongodb";

export interface Makeup {
  _id?: ObjectId;
  name: string;
  price: number;
  brand: string;
  category: string;
  stock: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}