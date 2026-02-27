import { CategoryDTO } from "./CategoryDTO";
import { SantanderPaymentMovementDTO } from "./SantanderPaymentMovementDTO";

export interface AssociatedSantanderPaymentDTO {
  movements: SantanderPaymentMovementDTO[];
  category: CategoryDTO;
}