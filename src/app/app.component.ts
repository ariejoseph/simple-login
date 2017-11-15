import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComponent } from './page/admin.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationService } from './service/authentication.service';
import { AdminGuard } from './guard/adminGuard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  app: string = 'SS';
  message: any;
  login: boolean;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private adminGuardService: AdminGuard) {
    console.log('app constructor');
    if(sessionStorage.getItem('currentUser')) {
      this.login = true;
    } else {
      this.login = false;
    }
  }

  ngOnInit() {
    this.adminGuardService.getMessage().subscribe(message => {this.message = message});
  }

  doLogout() {
    this.authService.logout();
    this.login = false;
    this.router.navigate(['/login']);
  }
}
