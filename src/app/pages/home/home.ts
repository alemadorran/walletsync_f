import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  // Aquí podrías traer datos reales del backend para las estadísticas
  stats = {
    totalMovements: 1250,
    categories: 12,
    syncStatus: 'Activo'
  };

}
