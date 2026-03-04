import { AssociatedSantanderPaymentByMonthDTO } from "./AssociatedSantanderPaymentByMonthDTO";

export interface AssociatedSantanderPaymentByYearDTO {
    year: number;
    associatedSantanderPaymentByMonthDTOS: AssociatedSantanderPaymentByMonthDTO[];
}