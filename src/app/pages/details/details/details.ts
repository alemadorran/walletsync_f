import { Component } from '@angular/core';
import { AssociatedSantanderPaymentByYearDTO } from '../../../interfaces/AssociatedSantanderPaymentByYearDTO';
import { SantanderService } from '../../../services/santander-service';
import { BehaviorSubject } from 'rxjs';
import { YearReportDTO } from '../../../interfaces/YearReportDTO';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

  year: number | null = null;

  yearNotSelected = false;

  type: 'Ingresos' | 'Gastos' | 'Todos' | null = null;

  associatedPaymentsByYear: AssociatedSantanderPaymentByYearDTO | null = null;

  _associatedPaymentsByYear: BehaviorSubject<AssociatedSantanderPaymentByYearDTO | null> = new BehaviorSubject<AssociatedSantanderPaymentByYearDTO | null>(null);
  associatedPaymentsByYear$ = this._associatedPaymentsByYear.asObservable();

  _yearReportDTO: BehaviorSubject<YearReportDTO | null> = new BehaviorSubject<YearReportDTO | null>(null);
  yearReportDTO$ = this._yearReportDTO.asObservable();

  constructor(private readonly santanderService: SantanderService) { }

  ngOnInit(): void {
   
  }

  onYearChange(event: any) {
    const selectedYear = parseInt(event.target.value, 10);
    this.year = selectedYear;
    this.yearNotSelected = false;
    this.onTypeChange({ target: { value: this.type } }); // Recargar datos con el nuevo año y el tipo seleccionado
  }

  onTypeChange(event: any) {
    const selectedType = event.target.value;
    this.type = selectedType;
    if(this.year) {
      if(this.type === 'Ingresos') {

        this.santanderService.getAllIncomesWithCategoriesByYear(this.year).subscribe({
          next: (data: AssociatedSantanderPaymentByYearDTO) => {
            this.associatedPaymentsByYear = data;
            this._associatedPaymentsByYear.next(data);
          },
          error: (err) => {
            console.error('Error al cargar movimientos asociados:', err);
          }
        });

        this.santanderService.getIncomesYearReport(this.year).subscribe({
          next: (data: YearReportDTO) => {
            console.log('Reporte anual de ingresos recibido:', data);
            this._yearReportDTO.next(data);
          },
          error: (err) => {
            console.error('Error al cargar reporte anual:', err);
          }
        });


      } else if(this.type === 'Gastos') {

        this.santanderService.getAllExpensesWithCategoriesByYear(this.year).subscribe({
          next: (data: AssociatedSantanderPaymentByYearDTO) => {
            this.associatedPaymentsByYear = data;
            this._associatedPaymentsByYear.next(data);
          },
          error: (err) => {
            console.error('Error al cargar movimientos asociados:', err);
          }
        });


        this.santanderService.getExpensesYearReport(this.year).subscribe({
          next: (data: YearReportDTO) => {
            this._yearReportDTO.next(data);
          },
          error: (err) => {
            console.error('Error al cargar reporte anual:', err);
          }
        });


      } else if(this.type === 'Todos') {
        this.santanderService.getAllMovementsWithCategoriesByYear(this.year).subscribe({
          next: (data: AssociatedSantanderPaymentByYearDTO) => {
            this.associatedPaymentsByYear = data;
            this._associatedPaymentsByYear.next(data);
          },
          error: (err) => {
            console.error('Error al cargar movimientos asociados:', err);
          }
        });
      }

      this._yearReportDTO.next(null); // Limpiar reporte anual al cambiar tipo para evitar mostrar datos desactualizados

    }else {
      this.yearNotSelected = true;
    }
  }
}
