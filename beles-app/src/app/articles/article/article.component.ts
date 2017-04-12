import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Article } from '../../shared/classes';
import { ArticlesService } from '../../shared/services';

@Component({
  moduleId: module.id,
  selector: 'beles-article',
  templateUrl: 'article.component.html'
})
export class ArticleComponent implements OnInit {

  article: Article;

  smallImage: string;
  largeImage: string;
  offset = 100;

  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    router.events.subscribe((val) => {
      window.scrollTo(0, 0);
    });
  }

    getArticle(): void {
        this.route.params.subscribe(params => {
            let slug: string = params['slug'];
            this.articlesService
                .getArticle(slug)
                .subscribe(article => { 
                    this.article = article,
                    this.smallImage = article.thumbnail_small,
                    this.largeImage = article.thumbnail_medium
                });
            });
    }

    ngOnInit() {
        this.getArticle();
    }
}