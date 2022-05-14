import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
  preloadedModules: string[] = [];
  constructor() { }
  preload(route: Route, load: () => Observable<any>){
    if(route.data?.['preload'] && route.path != null){
      // add route path to preloaded module array
      this.preloadedModules.push(route.path);
      
      console.log('Preloaded: '+route.path);
      return load();
    } else {
      return of(null)
    }
  }
}