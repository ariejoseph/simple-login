import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './service/authentication.service';

@Component({
	selector: 'app-root',
  template: 'Hello {{name}}!'
})
export class AdminComponent {
  name = sessionStorage.getItem('currentUser');
}
