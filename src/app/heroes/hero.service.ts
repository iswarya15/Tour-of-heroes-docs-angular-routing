import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // If we use from operator(Rxjs), it will emit all values from array in sequence.
    // Of operator sends the array itself as Observable
    const heroes = of(HEROES);
    console.log('Of Heroes =>', heroes);
    console.log('From Heroes =>', from(HEROES));
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id: string): Observable<Hero> {
    const hero = HEROES.find((x) => x.id === Number(id));
    return of(hero);
  }
}
