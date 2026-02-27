import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard/dashboard';
import { PaymentListComponent } from './components/payment-list-component/payment-list-component';
import { NavbarComponent } from './shared/navbar/navbar';
import { Categories } from './pages/categories/categories';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    App,
    Home,
    Dashboard,
    PaymentListComponent,
    NavbarComponent,
    Categories
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
