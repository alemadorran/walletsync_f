import { Component } from '@angular/core';
import { PdfUploadService } from '../../services/pdf-upload-service';

@Component({
  selector: 'app-pdf-upload-component',
  standalone: false,
  templateUrl: './pdf-upload-component.html',
  styleUrl: './pdf-upload-component.css',
})
export class PdfUploadComponent {
  selectedFile: File | null = null;
  loading = false;
  message: string | null = null;
  status: 'success' | 'error' | null = null;

  constructor(private uploadService: PdfUploadService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    this.message = null; // Limpiar mensajes previos
  }

  onUpload(): void {
    if (!this.selectedFile) return;

    this.loading = true;
    this.message = null;

    this.uploadService.upload(this.selectedFile).subscribe({
      next: (response) => {
        this.status = 'success';
        this.message = response;
        this.loading = false;
        this.selectedFile = null; // Resetear input
      },
      error: (err) => {
        this.status = 'error';
        this.message = err.error || 'Error al conectar con el servidor';
        this.loading = false;
      }
    });
  }
}
