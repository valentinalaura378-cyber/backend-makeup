import { InventoryRepository } from "./inventory.repository";
import { Inventory } from "./inventory.model";

export class InventoryService {
  private repository = new InventoryRepository();

  async create(data: Inventory) {
    const now = new Date();

    const inventory = {
      ...data,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };

    return await this.repository.create(inventory);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    const inventory = await this.repository.findById(id);

    if (!inventory)
      throw new Error("Inventario no encontrado");

    return inventory;
  }

  async update(
    id: string,
    data: Partial<Inventory>
  ) {
    return await this.repository.update(id, data);
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}