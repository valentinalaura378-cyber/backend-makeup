import { ObjectId } from "mongodb";

export interface Review {
  _id?: ObjectId;
  user: string;
  comment: string;
  rating: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}