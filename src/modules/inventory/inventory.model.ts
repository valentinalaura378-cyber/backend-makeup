import { ObjectId } from "mongodb";

export interface Inventory {
  _id?: ObjectId;
  productName: string;
  quantity: number;
  location?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}