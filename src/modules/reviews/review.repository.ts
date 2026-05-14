import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Review } from "./review.model";

export class ReviewRepository {
  private collection() {
    return getDb().collection<Review>("reviews");
  }

  // Crear
  async create(data: Review): Promise<Review> {
    const result = await this.collection().insertOne(data);

    return {
      _id: result.insertedId,
      ...data,
    };
  }

  // Obtener todas
  async findAll(): Promise<Review[]> {
    return this.collection()
      .find({ isActive: true })
      .toArray();
  }

  // Obtener por ID
  async findById(id: string): Promise<Review | null> {
    return this.collection().findOne({
      _id: new ObjectId(id),
      isActive: true,
    });
  }

  // Actualizar
  async update(
    id: string,
    data: Partial<Review>
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

  // Eliminar
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