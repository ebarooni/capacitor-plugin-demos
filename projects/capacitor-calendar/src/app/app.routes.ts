import { Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

export const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'api',
      },
      {
        path: '',
        redirectTo: 'api',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/api',
  },
];
