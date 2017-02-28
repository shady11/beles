import {Component, OnInit} from '@angular/core';
import {Article} from "../article";
import {ArticleService} from "../article.service";

@Component({
    moduleId: module.id,
    selector: 'beles-featured',
    templateUrl: 'featured.component.html',
    styleUrls: ['featured.component.css']
})
export class FeaturedComponent implements OnInit {

    articles: Article[];

    constructor(private articleService: ArticleService) {}

    getArticles(): void {
        this.articleService.getArticles()
            .subscribe(
                articles => this.articles = articles.slice(0,3)
            );
    }

    ngOnInit() {
        this.getArticles();
    }
}
