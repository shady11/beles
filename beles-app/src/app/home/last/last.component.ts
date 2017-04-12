import { Component, OnInit } from '@angular/core';

import { Article } from '../../shared/classes';
import { HomeService } from '../../shared/services';

@Component({
    moduleId: module.id,
    selector: 'beles-last',
    templateUrl: 'last.component.html'
})
export class LastComponent implements OnInit {

    articles: Article[];

    constructor(private homeService: HomeService) { }

    getArticles(): void {
        this.homeService.getLastArticles()
            .subscribe(
                articles => this.articles = articles
            );
    }

    ngOnInit() {
        this.getArticles();
    }
}
