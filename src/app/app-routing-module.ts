import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard/dashboard';
import { Categories } from './pages/categories/categories';
import { Details } from './pages/details/details/details';
import { Piechart } from './components/piechart/piechart';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'categories',
    component: Categories
  },
  {
    path: 'details',
    component: Details
  },
  {
    path: 'piechart',
    component: Piechart
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
