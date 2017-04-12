import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { NavItem } from '../classes';

@Injectable()
export class CoreService {

    private headerNavItemsUrl1 = 'src/app/shared/api/core/header/nav_part_1.json';  // url to header nav items part 1
    private headerNavItemsUrl2 = 'src/app/shared/api/core/header/nav_part_2.json';  // url to header nav items part 2

    constructor(private http: Http) { }

    //Header Nav Items
    getHeaderNavItems1(): Observable<NavItem[]> {
        return this.http.get(this.headerNavItemsUrl1)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getHeaderNavItems2(): Observable<NavItem[]> {
        return this.http.get(this.headerNavItemsUrl2)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
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