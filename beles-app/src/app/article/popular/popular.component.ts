import { Component, OnInit } from '@angular/core';
import {Article} from "../article";
import {ArticleService} from "../article.service";

@Component({
    selector: 'beles-popular',
    templateUrl: './popular.component.html',
    styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

    articles: Article[];

    constructor(private articleService: ArticleService) { }

    getArticles(): void {
        this.articleService.getArticles()
            .subscribe(
                articles => this.articles = articles.slice(0,5)
            );
    }

    ngOnInit() {
        this.getArticles();
    }

}
