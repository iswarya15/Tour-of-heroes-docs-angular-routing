import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
// import { CrisisCenterModule } from './crisis-center/crisis-center.module'; Lazy loaded
import { ComposeMessageComponent } from './compose-message/compose-message.component';
// import { AdminModule } from './admin/admin.module'; Lazy loaded
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HeroesModule,
    // CrisisCenterModule,
    // AdminModule,
    AuthModule,
    AppRoutingModule, //Routing Module always has to be placed last in imports array, since it has wilcard routes and it is possible that it might override any of the routing path of other modules placed after this.
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard],
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route config
    const replacer = (key, value) =>
      typeof value === 'function' ? value.name : value;
    console.log('Route confg: ', router.config);
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}

// Reverse the routing modules to see a click of the heroes link resulting in "Page not found".

//dig deep into AppModule constructor replacer
