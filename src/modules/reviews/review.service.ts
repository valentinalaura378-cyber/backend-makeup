import * as repo from "./review.repository";
import { Review } from "./review.model";

// Obtener todos
export const getAllReviews = async () => {
  return await repo.findAll();
};

// Obtener uno
export const getReviewById = async (id: string) => {
  const data = await repo.findById(id);

  if (!data) {
    throw new Error("Review no encontrado");
  }

  return data;
};

// Crear review
export const createReview = async (data: any) => {
  console.log("REVIEW DATA:", data);

  const productId = data?.productId;
  const rating = Number(data?.rating);
  const comment = data?.comment;

  if (!productId || !comment || isNaN(rating)) {
    throw new Error("Campos obligatorios faltantes");
  }

  if (rating < 1 || rating > 5) {
    throw new Error("El rating debe estar entre 1 y 5");
  }

  return await repo.create({
    productId,
    rating,
    comment,
    createdAt: new Date()
  });
};

// Actualizar review
export const updateReview = async (id: string, data: Partial<Review>) => {
  const existing = await repo.findById(id);

  if (!existing) {
    throw new Error("Review no encontrado");
  }

  return await repo.update(id, {
    ...data,
    updatedAt: new Date()
  });
};

// Eliminar review
export const deleteReview = async (id: string) => {
  const existing = await repo.findById(id);

  if (!existing) {
    throw new Error("Review no encontrado");
  }

  await repo.remove(id);
};