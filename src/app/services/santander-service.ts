// src/app/services/santander.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssociatedSantanderPaymentDTO } from '../interfaces/AssociatedSantanderPaymentDTO';
import { SantanderPaymentMovementDTO } from '../interfaces/SantanderPaymentMovementDTO';

@Injectable({ providedIn: 'root' })
export class SantanderService {
  private apiUrl = '/api/payments/santander';

  constructor(private http: HttpClient) {}

  // GET /api/payments/santander/inCategories
  getMovementsWithCategories(): Observable<AssociatedSantanderPaymentDTO[]> {
    return this.http.get<AssociatedSantanderPaymentDTO[]>(`${this.apiUrl}/inCategories`);
  }

  // GET /api/payments/santander
  getAllMovements(): Observable<SantanderPaymentMovementDTO[]> {
    return this.http.get<SantanderPaymentMovementDTO[]>(this.apiUrl);
  }

  createMovement(dto: SantanderPaymentMovementDTO): Observable<SantanderPaymentMovementDTO> {
    return this.http.post<SantanderPaymentMovementDTO>(this.apiUrl, dto);
  }

  saveAllMovements(dtos: SantanderPaymentMovementDTO[]): Observable<SantanderPaymentMovementDTO[]> {
    return this.http.post<SantanderPaymentMovementDTO[]>(`${this.apiUrl}/saveAll`, dtos);
  }

  deleteMovement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}