import {Routes} from '@angular/router';

export const full: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../../component/auth/auth.module').then(m => m.AuthModule),
  },
];
