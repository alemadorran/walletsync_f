import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AssociatedSantanderPaymentDTO } from '../../interfaces/AssociatedSantanderPaymentDTO';
import { SantanderService } from '../../services/santander-service';

@Component({
  selector: 'app-payment-list-component',
  standalone: false,
  templateUrl: './payment-list-component.html',
  styleUrl: './payment-list-component.css',
})
export class PaymentListComponent implements OnInit {
  associatedPayments: AssociatedSantanderPaymentDTO[] = [];

  // reactive loading flag
  private _isLoading = new BehaviorSubject<boolean>(true);
  readonly isLoading$ = this._isLoading.asObservable();

  constructor(private santanderService: SantanderService) {}

  ngOnInit(): void {
    this.santanderService.getMovementsWithCategories().subscribe({
      next: (data) => {
        this.associatedPayments = data;
        console.log('Movimientos con categorías:', this.associatedPayments);
        this._isLoading.next(false);
      },
      error: (err) => {
        console.error('Error al cargar los movimientos:', err);
        this._isLoading.next(false);
      }
    });
  }

  // Método auxiliar para sumar los importes de una categoría
  getCategoryTotal(movements: any[]): number {
    return movements.reduce((sum, mov) => sum + mov.amount, 0);
  }
}
