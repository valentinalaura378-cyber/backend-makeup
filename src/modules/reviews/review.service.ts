import { ReviewRepository } from "./review.repository";
import { Review } from "./review.model";

export class ReviewService {
  private repository = new ReviewRepository();

  async create(data: Review) {
    const now = new Date();

    const review = {
      ...data,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };

    return await this.repository.create(review);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    const review = await this.repository.findById(id);

    if (!review)
      throw new Error("Review no encontrada");

    return review;
  }

  async update(
    id: string,
    data: Partial<Review>
  ) {
    return await this.repository.update(id, data);
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}