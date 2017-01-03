import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AuthenticationService } from '../core/services/authentication.service';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    private pageTitle: String = 'Awesome News System';
    private model: any = {};
    private loading: boolean = false;
    private returnUrl: string;
    private errorLoginMessage: string = 'Oops! Something went wrong. Please, check again your username and password';
    private successLoginMessage: string = 'Yay! You successfully logged in Awesome News 4000';
    private minUsernameLength: number = 3;
    private maxUsernameLength: number = 30;
    private minPasswordLength: number = 5;
    private maxPasswordLength: number = 30;   

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        public toastr: ToastsManager
    ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
            data => {
                this.showMessageToUser();
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.showMessageToUser();
                this.loading = false;
            });
    }

    isLogged() {
        return this.authenticationService.checkIfUserIsLoggedIn();
    }

    showMessageToUser() {        
        if (this.isLogged()) {
            this.toastr.success(this.successLoginMessage);

        }
        else {
            this.toastr.error(this.errorLoginMessage);
        }
    }
}
