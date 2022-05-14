import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  NavigationExtras,
  UrlTree,
  CanLoad,
  Router,
  Route,
} from '@angular/router';

import { Observable, of, map } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): UrlTree | boolean {
    console.log('RouterStateSnapshot => ', state);
    const url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean | UrlTree {
    if (this.authService.isLoggedIn) {
      return true;
    }
    // this.router.navigate(['/login']);

    // Store attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Create a dummy session Id
    const sessionId = 12345;
    // Set navigation extras object that contains our global query params & fragment
    const navigationExtras: NavigationExtras = {
      queryParams: { session_id: sessionId },
      fragment: 'anchor',
    };

    // Redirect to Login Page
    console.log('Parsing URL => ', this.router.parseUrl('/login'));
    return this.router.createUrlTree(['/login'], navigationExtras); // When page first loads, the user is LoggedOut and redirected to Login page
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    return this.canActivate(route, state);
  }
  canLoad(route: Route) {
    const url = `${route.path}`;
    return this.checkLogin(url);
  }
}
