import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class UserGuardService implements CanActivate {
    private user: any;

    constructor(private _router: Router,
        private _authenticationService: AuthenticationService) {
    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        this.user = this._authenticationService.checkIfUserIsLoggedIn();

        if (this.user === null) {
            this._router.navigate(['/user/login']);
            return false;
        } else {
            return true;
        }
    }
}
