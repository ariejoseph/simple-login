import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../app.component';
import { AuthenticationService } from '../service/authentication.service';

@Component({
	selector: 'app-root',
  template: '<p>User Page<br>Hi {{name}}!'
})
export class UserComponent {
  name = sessionStorage.getItem('currentUser');
  constructor(app: AppComponent) {
  	app.login = true;
  }
}
