import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { LoginComponent } from '../../pages/login/login.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard-component/dashboard.component';

export const AppRoutes: Routes = [
      {
            path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
      },
      {
            path: 'login', component: LoginComponent, canActivate: [AuthGuard]
      },
      {
            path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard]
      },
      { path: '**', component: DashboardComponent  }
];
