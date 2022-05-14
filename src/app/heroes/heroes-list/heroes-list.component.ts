import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent implements OnInit {
  selectedHero: Hero;
  selectedId = 0;
  heroes: Hero[]; //array of type Hero
  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          this.selectedId = Number(params.get('id'));
          return this.heroService.getHeroes();
        })
      )
      .subscribe((data) => (this.heroes = data));
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(
      `HeroesComponent: Selected hero id = ${this.selectedHero.id}`
    );
  }
}
