import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoginComponent } from './pages/login/login.component';
import { ModalComponent } from './modal/modal.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { RoutingModule } from './core/routes/routing.module';
import { RouterModule } from '../../node_modules/@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DashboardModule,
    RoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
