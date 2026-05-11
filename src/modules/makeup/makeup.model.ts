import { ObjectId } from "mongodb";

export interface Makeup {
  _id?: ObjectId;
  name: string;
  brand: string;
  price: number;
  category?: string;
  stock?: number;
  createdAt?: Date;
}