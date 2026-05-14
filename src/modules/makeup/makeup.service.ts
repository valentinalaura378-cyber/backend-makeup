import { MakeupRepository } from "./makeup.repository";
import { Makeup } from "./makeup.model";

export class MakeupService {
  private repository = new MakeupRepository();

  async create(data: Makeup) {
    const now = new Date();

    const makeup = {
      ...data,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };

    return await this.repository.create(makeup);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    const makeup = await this.repository.findById(id);

    if (!makeup)
      throw new Error("Makeup no encontrado");

    return makeup;
  }

  async update(id: string, data: Partial<Makeup>) {
    return await this.repository.update(id, data);
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}