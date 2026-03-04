import { AssociatedSantanderPaymentDTO } from "./AssociatedSantanderPaymentDTO";

export interface AssociatedSantanderPaymentByMonthDTO {
  month: number;
  associatedSantanderPaymentDTOS: AssociatedSantanderPaymentDTO[];
}