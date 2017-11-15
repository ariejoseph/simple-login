import { Injectable } from '@angular/core';
import { Router, CanActivate, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AdminGuard implements CanActivate {
  private subject = new Subject<any>();

  constructor(
    private router: Router) {
    // clear alert message on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.subject.next();
      }
    });
  }

  canActivate() {
    if (sessionStorage.getItem('currentUser') == 'admin') {
      // admin logged in so return true
      return true;
    } else if (sessionStorage.getItem('currentUser') != null) {
      // user logged in, restricted to non admin
      var message = 'you\'re not admin!';
      this.setMessage(message);
      this.router.navigate([this.router.url]);
      return false;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }

  setMessage(message: string) {
    this.subject.next({text: message});
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}