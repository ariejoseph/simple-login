import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './service/authentication.service';

@Component({
	selector: 'app-root',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  constructor(
  	private router: Router,
  	private authService: AuthenticationService) {
  	
  	// if(sessionStorage.getItem('user') == null) {
  	// 	this.router.navigate(['login']);
  	// }
  }

  doLogout() {
  	this.authService.logout;
  	this.router.navigate(['/']);
  }
}
