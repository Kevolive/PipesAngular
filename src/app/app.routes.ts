import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'basic',
    title: 'Pipes basicos',
    loadComponent: () => import('./pages/basic-pages/basic-pages.component'),
  },
  {
    path: 'numbers',
    title: 'numbers Pipes ',
    loadComponent: () => import('./pages/number-pages/number-pages.component'),
  },
  {
    path: 'uncommon',
    title: 'Pipes no tan comunes',
    loadComponent: () => import('./pages/uncommon-pages/uncommon-pages.component'),

  },
  {
    path: 'custom',
    title: 'Pipes Personalizados',
    loadComponent: () => import('./pages/custom-pages/custom-pages.component'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  }
];
