import { ObjectId } from "mongodb";

export interface Brand {
  _id?: ObjectId;
  name: string;
  country?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}