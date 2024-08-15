import { Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { ApiComponent } from './tabs/api/api.component';

export const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'api',
        component: ApiComponent,
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
