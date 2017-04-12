import {Component, OnInit} from '@angular/core';

import { Article } from '../../shared/classes';
import { HomeService } from '../../shared/services';

@Component({
    moduleId: module.id,
    selector: 'beles-featured',
    templateUrl: 'featured.component.html'
})
export class FeaturedComponent implements OnInit {

    articles: Article[];

    constructor(private homeService: HomeService) {}

    getArticles(): void {
        this.homeService.getFeaturedArticles()
            .subscribe(
                articles => this.articles = articles
            );
    }

    ngOnInit() {
        this.getArticles();
    }
}
