import { Routes } from '@angular/router';
import AppComponent from 'src/app/app.component';
import {ReportsComponent} from '@/reports/reports.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'reports',
    component: ReportsComponent,
  }
];
