import { Component, ViewContainerRef } from '@angular/core';

import { ToastsManager } from './../../node_modules/ng2-toastr/ng2-toastr';

import { UserService } from './core/services/user.service';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
	selector: 'ans-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	pageTitle: String = 'Awesome News System';
	isThemeAwesome: boolean;

	constructor(
		private authenticationService: AuthenticationService,
		private userService: UserService,
		private toastr: ToastsManager,
		private viewContainerRef: ViewContainerRef) {
		this.toastr.setRootViewContainerRef(viewContainerRef);
	}

	checkUserThemeSettings(): boolean {
		this.isThemeAwesome = false;
		let isLogged = this.authenticationService.checkIfUserIsLoggedIn();

		if (isLogged) {
			let user = this.userService.getCurrentUserFromLocalStorage();
			if (user.settings[0].theme === 'Awesome') {
				this.isThemeAwesome = true;
			}
		}
		return this.isThemeAwesome;
	}
}