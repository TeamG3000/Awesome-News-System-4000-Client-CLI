import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TopOneHundredService {
private topArticlesURL='http://awesomenews4000api.herokuapp.com/topRatedArticles';

constructor(private http:Http) {
}
    getTopOneHundredArticles(): Observable<any[]> {
        return this.http
            .get(this.topArticlesURL)
            .map((res) => {
                return res.json().topArticles;
            });
    }
}