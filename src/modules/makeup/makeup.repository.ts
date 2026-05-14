import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Makeup } from "./makeup.model";

export class MakeupRepository {
  private collection() {
    return getDb().collection<Makeup>("makeups");
  }

  async create(data: Makeup): Promise<Makeup> {
    const result = await this.collection().insertOne(data);

    return {
      _id: result.insertedId,
      ...data,
    };
  }

  async findAll(): Promise<Makeup[]> {
    return this.collection()
      .find({ isActive: true })
      .toArray();
  }

  async findById(id: string): Promise<Makeup | null> {
    return this.collection().findOne({
      _id: new ObjectId(id),
      isActive: true,
    });
  }

  async update(id: string, data: Partial<Makeup>) {
    return this.collection().updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...data,
          updatedAt: new Date(),
        },
      }
    );
  }

  async delete(id: string) {
    return this.collection().updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          isActive: false,
          updatedAt: new Date(),
        },
      }
    );
  }
}