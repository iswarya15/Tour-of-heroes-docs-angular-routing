import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';
import { Observable, mergeMap, of, EMPTY, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(private crisisService: CrisisService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Crisis> {
    const id = route.paramMap.get('id');
    return this.crisisService.getCrisis(id).pipe(
      take(1), //emits till only 1st value
      mergeMap((crisis: Crisis) => {
        if (crisis) {
          return of(crisis);
        } else {
          this.router.navigate(['/crisis-center']);
          return EMPTY; //EMPTY: Observable<never> => Cancels navigation
        }
      })
    );
  }
}
