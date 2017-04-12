import { Component, OnInit } from '@angular/core';

import { Article } from '../../shared/classes';
import { HomeService } from '../../shared/services';

@Component({
    moduleId: module.id,
    selector: 'beles-blog',
    templateUrl: 'blog.component.html'
})
export class BlogComponent implements OnInit {

    articles: Article[];
    twoBlogArticle: Article[];
    
    constructor(private homeService: HomeService) { }
    
    getTwoBlogArticles(): void {
    this.homeService.getTwoBlogArticle()
        .subscribe(
            twoBlogArticle => this.twoBlogArticle = twoBlogArticle
        );
    }
    
    getBlogArticles(): void {
    this.homeService.getBlogArticles()
        .subscribe(
            articles => this.articles = articles
        );
    }
    
    ngOnInit() {
        this.getTwoBlogArticles();
        this.getBlogArticles();
    }

}