import { Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { ApiComponent } from './tabs/api/api.component';
import { SettingsComponent } from './tabs/settings/settings.component';

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
        path: 'settings',
        component: SettingsComponent,
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
