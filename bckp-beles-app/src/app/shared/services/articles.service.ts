import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Article } from "../classes";

@Injectable()
export class ArticlesService {

    private lastArticlesUrl = 'app/shared/api/articles/last.json';  // url to last articles

    constructor(private http: Http) {
    }
    // Last Articles
    getLastArticles(): Observable<Article[]> {
        return this.http.get(this.lastArticlesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // Extract Data
    extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    // Handling Error
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}