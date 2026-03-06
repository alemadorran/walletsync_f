import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard/dashboard';
import { PaymentListComponent } from './components/payment-list-component/payment-list-component';
import { NavbarComponent } from './shared/navbar/navbar';
import { Categories } from './pages/categories/categories';
import { FormsModule } from '@angular/forms'; 
import { MonthNamePipePipe } from './pipes/month-name-pipe-pipe';
import { PdfUploadComponent } from './components/pdf-upload-component/pdf-upload-component';
import { Details } from './pages/details/details/details';
import { Piechart } from './components/piechart/piechart';

@NgModule({
  declarations: [
    App,
    Home,
    Dashboard,
    PaymentListComponent,
    NavbarComponent,
    Categories,
    MonthNamePipePipe,
    PdfUploadComponent,
    Details,
    Piechart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BaseChartDirective
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [App]
})
export class AppModule { }
