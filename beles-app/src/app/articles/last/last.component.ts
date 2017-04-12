import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Article } from '../../shared/classes';
import { ArticlesService } from '../../shared/services';

@Component({
    moduleId: module.id,
    selector: 'beles-last',
    templateUrl: 'last.component.html'
})
export class LastComponent implements OnInit {

    articles: Article[];

    constructor(
        private articlesService: ArticlesService,
        private router: Router
    ) {
        router.events.subscribe((val) => {
            window.scrollTo(0, 0);
        });
    }

    getLastArticles(): void {
        this.articlesService.getLastArticles()
            .subscribe(
            articles => this.articles = articles
            );
    }

    ngOnInit(): void {
        this.getLastArticles();
    }
}
