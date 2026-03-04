import { Component, Input, OnInit } from '@angular/core';
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

  @Input() associatedPayments: AssociatedSantanderPaymentDTO[] = [];

  private _isLoading = new BehaviorSubject<boolean>(true);
  readonly isLoading$ = this._isLoading.asObservable();

  constructor() {}

  ngOnInit(): void {
    if(this.associatedPayments.length === 0) {
      this._isLoading.next(true);
    }else {
      this._isLoading.next(false);
    }
  }

  // Método auxiliar para sumar los importes de una categoría
  getCategoryTotal(movements: any[]): number {
    return movements.reduce((sum, mov) => sum + mov.amount, 0);
  }
}
