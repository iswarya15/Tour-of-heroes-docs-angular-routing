import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisService } from './crisis.service';
import { CrisesListComponent } from './crisis-list/crisis-list.component';
import { MessageService } from './message.service';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, FormsModule, CrisisRoutingModule, MatButtonModule],
  declarations: [
    CrisesListComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent,
    CrisisCenterComponent,
  ],
  providers: [CrisisService, MessageService],
})
export class CrisisCenterModule {}
