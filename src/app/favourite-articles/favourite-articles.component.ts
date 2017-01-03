import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../core/services/authentication.service';

@Component({
    templateUrl: './favourite-articles.component.html'
})
export class FavouriteArticlesComponent implements OnInit {
    user: any;
    favouritesListFilter: string;

    constructor(private _authenticationService: AuthenticationService) {
    }
    ngOnInit() {
        this.user = JSON.parse(this._authenticationService.checkIfUserIsLoggedIn()).user;
    }
}
