import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StickyModule } from 'fixed-ng2-sticky-kit/fixed-ng2-sticky-kit';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { HomeModule }   from "../home/home.module";
import { SvgModule }   from "../svg/svg.module";

import { 
    LastComponent, 
    LastPopularComponent,
    ArticleComponent, 
    RelatedComponent, 
    CategoryComponent, 
    CatPopularComponent
}    from './';
import { ArticlesService }  from '../shared/services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        StickyModule,
        LazyLoadImageModule,
        
        HomeModule,
        SvgModule
    ],
    declarations: [
        LastComponent,
        LastPopularComponent,
        ArticleComponent,
        RelatedComponent,
        CategoryComponent,
        CatPopularComponent,
    ],
    exports: [
        LastComponent,
        LastPopularComponent,
        ArticleComponent,
        RelatedComponent,
        CategoryComponent,
        CatPopularComponent,
    ],
    providers: [
        ArticlesService
    ]
})
export class ArticlesModule { }