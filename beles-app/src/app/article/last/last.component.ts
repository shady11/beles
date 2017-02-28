import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../article.service";
import {Article} from "../article";

@Component({
    selector: 'beles-last',
    templateUrl: 'last.component.html',
    styleUrls: ['last.component.css']
})
export class LastComponent implements OnInit {

    articles: Article[];

    constructor(private articleService: ArticleService) { }

    getArticles(): void {
        this.articleService.getArticles()
            .subscribe(
                articles => this.articles = articles.slice(0,12)
            );
    }

    ngOnInit() {
        this.getArticles();
    }

}
