import { Routes } from '@angular/router';
import { AppComponent } from '../../app.component';
import { AuthGuard } from '../auth/auth.guard';

export const AppRoutes: Routes = [
      {
            path: 'dashboard', component: AppComponent, canActivate: [AuthGuard]
      },
      {
            path: 'login', component: AppComponent, canActivate: [AuthGuard]
      },
      {
            path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard]
      },
      { path: '**', component: AppComponent }
];
