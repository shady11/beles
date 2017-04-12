import { Component, OnInit } from '@angular/core';

import { Article } from '../../../shared/classes';
import { ArticlesService } from '../../../shared/services';

@Component({
  moduleId: module.id,
  selector: 'beles-last-popular',
  templateUrl: 'last-popular.component.html'
})
export class LastPopularComponent implements OnInit {
  
  populars: Article[];

  constructor(private articlesService: ArticlesService) { }

  getPopulars(): void {        
    this.articlesService.getPopularArticles()
        .subscribe(
            populars => this.populars = populars
        );
  }

  ngOnInit() {
    this.getPopulars();
  }

}
