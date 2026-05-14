import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Category } from "./category.model";

export class CategoryRepository {
  private collection() {
    return getDb().collection<Category>("categories");
  }

  async create(data: Category): Promise<Category> {
    const result = await this.collection().insertOne(data);

    return {
      _id: result.insertedId,
      ...data,
    };
  }

  async findAll(): Promise<Category[]> {
    return this.collection()
      .find({ isActive: true })
      .toArray();
  }

  async findById(id: string): Promise<Category | null> {
    return this.collection().findOne({
      _id: new ObjectId(id),
      isActive: true,
    });
  }

  async update(
    id: string,
    data: Partial<Category>
  ) {
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