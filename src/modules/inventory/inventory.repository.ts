import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Inventory } from "./inventory.model";

export class InventoryRepository {
  private collection() {
    return getDb().collection<Inventory>("inventories");
  }

  async create(data: Inventory): Promise<Inventory> {
    const result = await this.collection().insertOne(data);

    return {
      _id: result.insertedId,
      ...data,
    };
  }

  async findAll(): Promise<Inventory[]> {
    return this.collection()
      .find({ isActive: true })
      .toArray();
  }

  async findById(id: string): Promise<Inventory | null> {
    return this.collection().findOne({
      _id: new ObjectId(id),
      isActive: true,
    });
  }

  async update(id: string, data: Partial<Inventory>) {
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