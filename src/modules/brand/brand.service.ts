import { BrandRepository } from "./brand.repository";
import { Brand } from "./brand.model";

export class BrandService {
  private repository = new BrandRepository();

  async create(data: Brand) {
    const now = new Date();

    const brand = {
      ...data,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };

    return await this.repository.create(brand);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    const brand = await this.repository.findById(id);

    if (!brand)
      throw new Error("Marca no encontrada");

    return brand;
  }

  async update(id: string, data: Partial<Brand>) {
    return await this.repository.update(id, data);
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}