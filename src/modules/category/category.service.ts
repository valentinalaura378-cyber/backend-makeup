import { CategoryRepository } from "./category.repository";
import { Category } from "./category.model";

export class CategoryService {
  private repository = new CategoryRepository();

  async create(data: Category) {
    return await this.repository.create(data);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async update(
    id: string,
    data: Partial<Category>
  ) {
    return await this.repository.update(id, data);
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}