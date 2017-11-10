import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  app: string = 'Home';
  login: boolean;
  constructor(
    private router: Router,
    private authService: AuthenticationService) {
    console.log('app constructor');
  }

  doLogout() {
    this.authService.logout();
    this.login = false;
    this.router.navigate(['/login']);
  }
}
