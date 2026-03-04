import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthNamePipe',
  standalone: false,
})
export class MonthNamePipePipe implements PipeTransform {
  
  private readonly MONTHS = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  transform(value: any): string {
    const monthIndex = parseInt(value, 10) - 1;
    // Verificamos que el índice esté en el rango correcto
    if (monthIndex >= 0 && monthIndex < 12) {
      return this.MONTHS[monthIndex];
    }
    return value; // Si no es un número válido, devolvemos el valor original
  }

}
