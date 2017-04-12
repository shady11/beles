import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'isomorphic-fetch';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Article } from "../classes";

declare var fetch;

@Injectable()
export class ArticlesService {

    baseUrl: string;
    private headers = new Headers({'Content-Type': 'application/json'});

    private lastArticlesUrl = 'http://test.dev/latest';  // url to last articles
    private popularArticlesUrl = 'src/app/shared/api/articles/last-popular.json';  // url to last articles
    private articleUrl = 'http://test.dev/post';  // url to last articles

    constructor(private http: Http) {
        this.baseUrl = 'http://test.dev';
    }

    // Article
    getArticle(slug: string): Observable<Article> {
        return lazyFetch(`${this.baseUrl}/post/${slug}`).map( (article: Article) => {
            return article;
        });
    }

    // Last Articles
    getLastArticles(): Observable<Article[]> {
        return this.http.get(`${this.baseUrl}/latest`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // Popular Articles
    getPopularArticles(): Observable<Article[]> {
        return this.http.get(`${this.baseUrl}/latest-popular`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // Extract Data
    extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    // Handling Error
    private handleError (error: Response | any) {
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

function lazyFetch(url, options?) {
  return new Observable(fetchObserver => {
    let cancelToken = false;
    fetch(url, options)
      .then(res => {
        if (!cancelToken) {
          return res.json()
            .then(data => {
              fetchObserver.next(data);
              fetchObserver.complete();
            });
        }
      }).catch(err => fetchObserver.error(err));
      return () => {
        cancelToken = true;
      };
  });
}