import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user-model';
import { ErrorHandler } from '../errorHandler';

const apiUrl = 'http://awesomenews4000api.herokuapp.com';

@Injectable()
export class UserService {

    constructor(
        private http: Http,
        private errorHandler: ErrorHandler
    ) { }

    create(user: User) {
        return this.http.post(apiUrl + '/user/register', user, this.createHeaderWithJwtToken())
            .map((response: Response) => response.json());
            //.catch(this.errorHandler.handleError);
    }

    updateSelectedMediaSources(user: User) {
        let body = JSON.stringify({
            username: user.username,
            selectedMedia: user.selectedMedia
        });

        return this.http.post(apiUrl + '/sources/select-media', body, this.setHeadersWithJSON());
            //.catch(this.errorHandler.handleError);
    }

    updateSettings(user: User) {
        let body = JSON.stringify({
            username: user.username,
            theme: user.settings[0].theme
        });

        return this.http.post(apiUrl + '/user/settings', body, this.setHeadersWithJSON())
            //.catch(this.errorHandler.handleError);
    }

    getCurrentUserFromLocalStorage() {
        return JSON.parse(localStorage.getItem('currentUser')).user;
    }

    private createHeaderWithJwtToken() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

    private setHeadersWithJSON() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser')).user;
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}