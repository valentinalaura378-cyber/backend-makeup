import { ObjectId } from "mongodb";

export interface Review {
  _id?: ObjectId;
  productId: string;
  userId?: string;
  rating: number;
  comment: string;
  createdAt?: Date;
  updatedAt?: Date;
}