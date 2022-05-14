import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageCrisisComponent } from './manage-crisis/manage-crisis.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

import { MatButtonModule } from '@angular/material/button';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
  imports: [AdminRoutingModule, MatButtonModule],
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageCrisisComponent,
    ManageHeroesComponent,
  ],
  providers: [AuthGuard],
})
export class AdminModule {}
