import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message: string;
  // Making AuthService public since it is used in template
  constructor(public authService: AuthService, private router: Router) {
    this.message = this.getMessage(); //called when component first loads
  }

  ngOnInit() {}

  getMessage() {
    return `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`;
  }

  login() {
    this.message = 'Trying to log in...';

    this.authService.login().subscribe(() => {
      this.message = this.getMessage(); //always going to be true ?
      if (this.authService.isLoggedIn) {
        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true,
        };
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        this.router.navigate(['/admin'], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = this.getMessage();
  }
}
