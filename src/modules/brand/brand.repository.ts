import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Brand } from "./brand.model";

export class BrandRepository {
  private collection() {
    return getDb().collection<Brand>("brands");
  }

  // Crear
  async create(data: Brand): Promise<Brand> {
    const result = await this.collection().insertOne(data);

    return {
      _id: result.insertedId,
      ...data,
    };
  }

  // Obtener todas
  async findAll(): Promise<Brand[]> {
    return this.collection()
      .find({ isActive: true })
      .toArray();
  }

  // Obtener por ID
  async findById(id: string): Promise<Brand | null> {
    return this.collection().findOne({
      _id: new ObjectId(id),
      isActive: true,
    });
  }

  // Actualizar
  async update(
    id: string,
    data: Partial<Brand>
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

  // Eliminar (soft delete)
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