import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
const routes: Routes = [
  {
    path: 'heroes-list',
    redirectTo: 'superheroes',
  },
  {
    path: 'hero/:id',
    redirectTo: 'superhero/:id',
  },
  { path: 'superheroes', component: HeroesListComponent },
  { path: 'superhero/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
