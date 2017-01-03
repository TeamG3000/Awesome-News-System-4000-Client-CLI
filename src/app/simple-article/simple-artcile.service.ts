import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SimpleArtcileService {
    private simpleArticlesURL = 'http://awesomenews4000api.herokuapp.com/home';
    private currentaPage: number;

    constructor(private _http: Http) {
        this.currentaPage = 0;
    }

    getNextPage(user: any): Observable<any[]> {
        this.currentaPage += 1;
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });

        return this._http
            .post(this.simpleArticlesURL, JSON.stringify({
                user: user,
                page: this.currentaPage
            }), options)
            .map((response: Response) => {
                return response.json().simpleArticles;
            });
    }
}
