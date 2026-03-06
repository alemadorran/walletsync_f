import { CategoryAmountDTO } from "./CategoryAmountDTO";

export interface YearReportDTO {
    year: number;
    categoryType: string;
    totalAmountByCategoriesDTOS: CategoryAmountDTO[];
}