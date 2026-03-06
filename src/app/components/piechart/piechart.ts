import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { CategoryAmountDTO } from '../../interfaces/CategoryAmountDTO';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-piechart',
  standalone: false, // Angular clásico
  templateUrl: './piechart.html',
  styleUrl: './piechart.css',
})
export class Piechart implements OnChanges {

  @Input() categoryType: string = '';
  @Input() data: CategoryAmountDTO[] = [];

  // Usamos el Subject para que el pipe | async de tu HTML reaccione
  _pieChartData = new BehaviorSubject<ChartData<'pie', number[], string | string[]> | null>(null);
  pieChartData$ = this._pieChartData.asObservable();

  public pieChartType: ChartType = 'pie';

  // Este es el secreto: reacciona cada vez que el padre cambia el año o tipo
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges detectado en Piechart:', changes);
    console.log('Datos actuales en Piechart:', this.data);
    if (changes['data'] && this.data) {
      console.log('Datos recibidos para el gráfico:', this.data);
      this.updateChartData(); 
    }
  }

  updateChartData() {
    // Evitamos renderizar si la lista viene vacía
    if (!this.data || this.data.length === 0) {
      this._pieChartData.next(null);
      return;
    }

    const labels = this.data.map(item => item.categoryLabel);
    const amounts = this.data.map(item => item.totalAmount);

    this._pieChartData.next({
      labels: labels,
      datasets: [
        {
          data: amounts,
          backgroundColor: this.generateColors(labels.length),
          hoverOffset: 15,
          borderWidth: 0
        }
      ]
    }); 
  }

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          padding: 20,
          usePointStyle: true,
          font: { size: 12 },
          // Esto ayuda a que el texto de la leyenda use los colores de DaisyUI
          color: '#a6adbb' 
        }
      },
      tooltip: {
        backgroundColor: '#1f2937',
        titleFont: { size: 16 },
        bodyFont: { size: 14 },
        padding: 10,
        cornerRadius: 8
      }
    }
  };

  private generateColors(count: number): string[] {
    const daisyPalette = [
      '#570df8', '#f000b8', '#37cdbe', '#3d4451', 
      '#641ae3', '#d926a9', '#2af0de', '#1f2937', 
      '#fbbd23', '#f87272', '#36d399'
    ];

    return Array.from({ length: count }, (_, i) => daisyPalette[i % daisyPalette.length]);
  }
}