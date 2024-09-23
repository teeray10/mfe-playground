import { Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';
import {HomeComponent} from '@/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'billing',
  //   loadComponent: () => loadRemoteModule('mfe1', './Component')
  // },
  // {
  //   path: 'reports',
  //   loadComponent: () => loadRemoteModule('mfe2', './Component')
  // }
];
