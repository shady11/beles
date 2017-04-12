import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Article } from "../classes";

@Injectable()
export class HomeService {

    baseUrl: string;

    private featuredArticlesUrl = 'src/app/shared/api/home/featured.json';  // url to Featured articles
    private popularFirstArticleUrl = 'src/app/shared/api/home/popular-first.json';  // url to popular first article
    private popularArticlesUrl = 'src/app/shared/api/home/popular-last.json';  // url to popular last articles
    private lastArticlesUrl = 'src/app/shared/api/home/last.json';  // url to last articles
    private blogTwoArticlesUrl = 'src/app/shared/api/home/blog-first.json';  // url to two blog articles
    private blogArticlesUrl = 'src/app/shared/api/home/blog-last.json';  // url to blog articles

    constructor(private http: Http) {        
        this.baseUrl = 'http://test.dev';
    }

    //Featured Articles
    getFeaturedArticles(): Observable<Article[]> {
        return this.http.get(`${this.baseUrl}/featured`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    //Popular Articles
    getFirstPopularArticle(): Observable<Article[]> {
        return this.http.get(this.popularFirstArticleUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getPopularArticles(): Observable<Article[]> {
        return this.http.get(this.popularArticlesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    //Last Articles
    getLastArticles(): Observable<Article[]> {
        return this.http.get(`${this.baseUrl}/latest`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    //Blog Articles
    getTwoBlogArticle(): Observable<Article[]> {
        return this.http.get(this.blogTwoArticlesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getBlogArticles(): Observable<Article[]> {
        return this.http.get(this.blogArticlesUrl)
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