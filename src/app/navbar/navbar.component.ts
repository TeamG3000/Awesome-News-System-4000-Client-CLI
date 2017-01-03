import { Component } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { SearchComponent } from '../search/search.component';
import { Router } from '@angular/router'

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    providers: [SearchComponent],
    styleUrls:['./navbar.component.css']
})
export class NavbarComponent {
    private pageTitle: string = 'Awesome News System';
    public userName: string;
    private searchPhrase: string
    private isCollapsed: boolean = true;

    constructor(
        private authenticationService: AuthenticationService,
        private searchComponent: SearchComponent,
        private router: Router) {
        this.searchPhrase = '';
    }

    public isLogged() {
        return this.authenticationService.checkIfUserIsLoggedIn();
    }

    public getUserName() {
        let user = JSON.parse(localStorage.getItem('currentUser')).user;
        this.userName = user.username;
        return this.userName;
    }
    private search() {
        localStorage.setItem("searchPhrase", this.searchPhrase);
        this.searchPhrase = '';
    }
    private onSubmit() {
        this.router.navigateByUrl('/search');
    }
}