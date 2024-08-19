import { Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { ApiComponent } from './tabs/api/api.component';
import { SettingsComponent } from './tabs/settings/settings.component';
import { PermissionsDisplayComponent } from './child-views/permissions-display/permissions-display.component';

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
        children: [
          {
            path: 'permissions',
            component: PermissionsDisplayComponent,
          },
          {
            path: '',
            component: SettingsComponent,
          },
          {
            path: '**',
            redirectTo: '',
          },
        ],
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
    redirectTo: 'api',
  },
];
