import { Component, OnInit }    from '@angular/core';
import { Router }               from "@angular/router";

import { Article }          from '../../shared/classes';
import { ArticlesService }  from '../../shared/services';

@Component({
    moduleId: module.id,
    selector: 'beles-blog',
    templateUrl: 'blog.component.html',
    styleUrls: ['blog.component.css']
})
export class LastComponent implements OnInit {

    articles: Article[];

    constructor(
        private articlesService: ArticlesService,
        private router: Router
    ) {
        router.events.subscribe((val) => {
            window.scrollTo(0,0)
        });
    }

    getArticles(): void {
        this.articlesService.getLastArticles()
            .subscribe(
                articles => this.articles = articles
            );
    }

    ngOnInit() {
        this.getArticles();
    }

    scrollTop() {
        window.scrollTo(0,0);
    }

}
