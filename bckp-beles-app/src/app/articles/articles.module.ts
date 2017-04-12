import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule }   from "../home/home.module";

import { LastComponent }    from './';
import { ArticlesService }  from '../shared/services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HomeModule
    ],
    declarations: [
        LastComponent
    ],
    exports: [
        LastComponent
    ],
    providers: [
        ArticlesService
    ]
})
export class ArticlesModule { }