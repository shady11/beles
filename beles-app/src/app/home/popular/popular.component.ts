import { Component, OnInit } from '@angular/core';

import { Article } from '../../shared/classes';
import { HomeService } from '../../shared/services';

@Component({
    moduleId: module.id,
    selector: 'beles-popular',
    templateUrl: 'popular.component.html'
})
export class PopularComponent implements OnInit {

    articles: Article[];
    firstPopular: Article[];

    constructor(private homeService: HomeService) { }

    getFirstPopular(): void {
        this.homeService.getFirstPopularArticle()
            .subscribe(
                firstPopular => this.firstPopular = firstPopular
            );
    }

    getArticles(): void {
        this.homeService.getPopularArticles()
            .subscribe(
                articles => this.articles = articles
            );
    }

    ngOnInit() {
        this.getArticles();
        this.getFirstPopular();
    }

}
