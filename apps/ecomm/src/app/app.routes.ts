import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
   loadChildren: () => import('@shreyas-workspace/home').then(m => m.HomeModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
