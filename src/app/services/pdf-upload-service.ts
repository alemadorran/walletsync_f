import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PdfUploadService {

  private readonly API_URL = 'http://localhost:8080/api/payments/santander/upload-pdf';

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);

    // Usamos { responseType: 'text' } porque tu controlador devuelve un String, no un JSON
    return this.http.post(this.API_URL, formData, { responseType: 'text' });
  }
  
}
