import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, Observable } from 'rxjs';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.activatedRoute.paramMap
        .pipe(
          switchMap((params) => {
            console.log(params);
            return this.heroService.getHero(params.get('id'));
          })
        )
        .subscribe((data) => {
          console.log(data);
          this.hero = data;
        });
    }, 3000);
  }

  goToHeroes() {
    //{id: 1} -> Route optional parameter
    this.router.navigate(['/superheroes', { id: this.hero.id }]);
  }
}
