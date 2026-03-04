import { Component, OnInit } from '@angular/core';
import { SantanderService } from '../../../services/santander-service';
import { BehaviorSubject } from 'rxjs';
import { AssociatedSantanderPaymentDTO } from '../../../interfaces/AssociatedSantanderPaymentDTO';
import { AssociatedSantanderPaymentByYearDTO } from '../../../interfaces/AssociatedSantanderPaymentByYearDTO';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  private _isLoading = new BehaviorSubject<boolean>(true);
  readonly isLoading$ = this._isLoading.asObservable();

  year: number = new Date().getFullYear();

  associatedPaymentsByYear: AssociatedSantanderPaymentByYearDTO | null = null;

  constructor(private readonly santanderService: SantanderService) { }

  ngOnInit(): void {
    this.santanderService.getAllMovementsWithCategoriesByYear(this.year).subscribe({
      next: (data: AssociatedSantanderPaymentByYearDTO) => {
        
        this.associatedPaymentsByYear = data;

        this._isLoading.next(false);
      },
      error: (err) => {
        console.error('Error al cargar movimientos asociados:', err);
        this._isLoading.next(false);
      }
    });
  }

}
