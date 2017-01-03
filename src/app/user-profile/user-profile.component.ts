import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { User } from '../core/models/user-model';
import { AuthenticationService } from '../core/services/authentication.service';
import { UserService } from '../core/services/user.service';
import { CollapseDirective } from '../core/directives/collapse.directive';

@Component({
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    private isCollapsedContentFavouriteArticles: boolean = false;
    private isCollapsedContentSelectedMedia: boolean = false;
    private isCollapsedContentUserSettings: boolean = false;
    private user: User;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        public toastr: ToastsManager
    ) { }

    ngOnInit() {
        this.user = JSON.parse(this.authenticationService.checkIfUserIsLoggedIn()).user;
    }

    updateUserTheme(): void {
        let updatedUser = this.user;
        for (let i = 0; i < this.user.settings.length; i++) {

            if (this.user.settings[i].theme === 'Default') {
                updatedUser.settings[i].theme = 'Awesome';
            }
            else if (this.user.settings[i].theme === 'Awesome') {
                updatedUser.settings[i].theme = 'Default'
            }
        }

        this.user = updatedUser;

        this.userService.updateSettings(this.user).subscribe(response => {

            localStorage.removeItem('currentUser');
            localStorage.setItem('currentUser', JSON.stringify({ user: this.user }));
        });
    }
}