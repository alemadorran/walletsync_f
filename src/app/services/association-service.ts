// src/app/services/association.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovementAssociationDTO } from '../interfaces/MovementAssociationDTO';

@Injectable({ providedIn: 'root' })
export class AssociationService {
  private apiUrl = '/api/associations';

  constructor(private http: HttpClient) {}

  getAll(): Observable<MovementAssociationDTO[]> {
    return this.http.get<MovementAssociationDTO[]>(this.apiUrl);
  }

  create(association: MovementAssociationDTO): Observable<MovementAssociationDTO> {
    return this.http.post<MovementAssociationDTO>(this.apiUrl, association);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
