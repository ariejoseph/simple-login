import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../app.component';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {};
  returnUrl: string;

  testLogin() {
    console.log(this.model);
    if(this.model.username != null && this.model.password != null) {
      this.router.navigate(['/']);
      sessionStorage.setItem('currentUser', this.model.username);
      this.app.login = true;
    } else {
      console.log('bad credentials');
      this.router.navigate(['/login']);
    }
  }

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private app: AppComponent) {}

  ngOnInit() {
    if(sessionStorage.getItem('currentUser') == 'admin') {
      this.router.navigate(['/admin']);
    } else if(sessionStorage.getItem('currentUser') != null) {
      this.router.navigate(['/user']);
    } else {
      // reset login status
      this.authenticationService.logout();
      sessionStorage.clear();
    }
  }

  login() {
    this.authenticationService.login(this.model.username, this.model.password);
  }
}
