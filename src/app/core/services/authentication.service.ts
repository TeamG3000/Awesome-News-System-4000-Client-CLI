import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ErrorHandler } from './../errorHandler';

const loginUrl = 'http://awesomenews4000api.herokuapp.com/user/login';

@Injectable()
export class AuthenticationService {
    constructor(
        private http: Http,
        private errorHandler: ErrorHandler
    ) { }

    login(username: string, password: string) {
        return this.http.post(loginUrl, JSON.stringify({ username: username, password: password }), this.setHeaders())
            .map((response: Response) => {
                let apiResponse = response.json();

                if (apiResponse && apiResponse.user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(apiResponse));
                }

            });
            //.catch(this.errorHandler.handleError);
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    checkIfUserIsLoggedIn() {
        return localStorage.getItem('currentUser');
    }

    private setHeaders() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
}