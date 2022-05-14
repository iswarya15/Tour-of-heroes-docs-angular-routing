import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard
  implements CanDeactivate<CrisisDetailComponent>
{
  constructor() {}
  canDeactivate(
    component: CrisisDetailComponent,
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | boolean {
    // Get the Crisis Center ID
    console.log('Route paramMap Id=>', route.paramMap.get('id'));
    // allow sync navigation ('true') if no info is changed. Component -> CrisisDetailComponent
    if (component.crisis?.name === component.editName) {
      return true;
    }
    // Otherwise ask the user with dialog service and return with Observable which resolves to true/false when the user decides
    return component.dialogService.confirm('Discard changes? ');
  }
}
