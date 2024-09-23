import { Routes } from '@angular/router';
import AppComponent from 'src/app/app.component';
import {BillingComponent} from '@/billing/billing.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'billing',
    component: BillingComponent,
  }
];
