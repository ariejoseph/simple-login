import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

// import { AppComponent } from '../app.component';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    // private app: AppComponent
    ) {}

  canActivate() {
    if (sessionStorage.getItem('currentUser') == 'admin') {
      // admin logged in so return true
      return true;
    } else if (sessionStorage.getItem('currentUser') != null) {
      // user logged in
      // this.app.message = 'you\'re not admin!';
      this.router.navigate(['/']);
      return false;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}