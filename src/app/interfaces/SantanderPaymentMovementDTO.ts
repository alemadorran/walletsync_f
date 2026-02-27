// src/app/models/santander.model.ts

export interface SantanderPaymentMovementDTO {
  id?: number;
  operationDate: string; // LocalDate se recibe como string ISO yyyy-mm-dd
  operationLabel: string;
  amount: number; // BigDecimal se mapea a number en TS
  balance: number;
}