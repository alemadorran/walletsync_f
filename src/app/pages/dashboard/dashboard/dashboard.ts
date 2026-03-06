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

  ngOnInit(): void {

  }


}
