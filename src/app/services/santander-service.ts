// src/app/services/santander.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssociatedSantanderPaymentDTO } from '../interfaces/AssociatedSantanderPaymentDTO';
import { SantanderPaymentMovementDTO } from '../interfaces/SantanderPaymentMovementDTO';
import { AssociatedSantanderPaymentByYearDTO } from '../interfaces/AssociatedSantanderPaymentByYearDTO';
import { YearReportDTO } from '../interfaces/YearReportDTO';

@Injectable({ providedIn: 'root' })
export class SantanderService {
  private apiUrl = '/api/payments/santander';

  constructor(private http: HttpClient) { }

  // GET /api/payments/santander/inCategories
  getMovementsWithCategories(): Observable<AssociatedSantanderPaymentDTO[]> {
    return this.http.get<AssociatedSantanderPaymentDTO[]>(`${this.apiUrl}/inCategories`);
  }

  getAllMovementsWithCategoriesByYear(year: number): Observable<AssociatedSantanderPaymentByYearDTO> {
    return this.http.get<AssociatedSantanderPaymentByYearDTO>(`${this.apiUrl}/inCategoriesByYear/${year}`);
  }

  getAllExpensesWithCategoriesByYear(year: number): Observable<AssociatedSantanderPaymentByYearDTO> {
    return this.http.get<AssociatedSantanderPaymentByYearDTO>(`${this.apiUrl}/expenses/inCategoriesByYear/${year}`);
  }

  getAllIncomesWithCategoriesByYear(year: number): Observable<AssociatedSantanderPaymentByYearDTO> {
    return this.http.get<AssociatedSantanderPaymentByYearDTO>(`${this.apiUrl}/incomes/inCategoriesByYear/${year}`);
  }

  getIncomesYearReport(year: number): Observable<YearReportDTO> {
    return this.http.get<YearReportDTO>(`${this.apiUrl}/incomes/yearReport/${year}`);
  }

  getExpensesYearReport(year: number): Observable<YearReportDTO> {
    return this.http.get<YearReportDTO>(`${this.apiUrl}/expenses/yearReport/${year}`);
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