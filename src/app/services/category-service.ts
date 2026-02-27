import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../interfaces/CategoryDTO';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private apiUrl = '/api/categories';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(this.apiUrl);
  }

  getById(id: number): Observable<CategoryDTO> {
    return this.http.get<CategoryDTO>(`${this.apiUrl}/${id}`);
  }

  create(category: CategoryDTO): Observable<CategoryDTO> {
    return this.http.post<CategoryDTO>(this.apiUrl, category);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
