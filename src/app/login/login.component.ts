import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {};
  returnUrl: string;

  test() {
    console.log(this.model);
    if(this.model.username == 'admin' && this.model.password == 'admin') {
      this.router.navigate(['/admin']);
      sessionStorage.setItem('currentUser', this.model.username);
    } else {
      console.log('bad credentials')
      this.router.navigate(['/login']);
    }
  }

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
    if(!false) {
      console.log('benar');
    }
  }

  ngOnInit() {
    if(sessionStorage.getItem('currentUser')) {
      var url = '/'+sessionStorage.getItem('currentUser');
      this.router.navigate([url]);
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
