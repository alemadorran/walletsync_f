// src/app/models/category.model.ts
export interface CategoryDTO {
  id?: number;
  categoryName: string;
  categoryType: 'INCOME' | 'EXPENSE';
}