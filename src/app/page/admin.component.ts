import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../app.component';
import { AuthenticationService } from '../service/authentication.service';

@Component({
	selector: 'app-root',
  template: '<p>Admin Page<br>Hello {{name}}!'
})
export class AdminComponent {
  name = sessionStorage.getItem('currentUser');
  constructor(app: AppComponent) {
  	app.login = true;
  }
}
