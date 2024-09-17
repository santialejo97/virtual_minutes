import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    title: 'Login',
    loadComponent: () => import('./auth/auth.component'),
  },
  {
    path: 'dashboard',
    title: 'Home',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'minute',
        title: 'Minute',
        loadComponent: () =>
          import('./dashboard/pages/minute/minute.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
