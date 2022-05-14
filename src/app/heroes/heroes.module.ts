import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroService } from './hero.service';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { MessageService } from './message.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesRoutingModule } from './heroes-routing.module';
@NgModule({
  imports: [CommonModule, HeroesRoutingModule, FormsModule],
  declarations: [HeroDetailComponent, HeroesListComponent],
  providers: [HeroService, MessageService],
})
export class HeroesModule {}
