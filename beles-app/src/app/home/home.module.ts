import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { SvgModule } from '../svg/';

import { HomeService } from '../shared/services';
import { HomeComponent, FeaturedComponent, LastComponent, PopularComponent, BlogComponent } from './';

import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpModule,

        SvgModule
    ],
    declarations: [
        HomeComponent,
        FeaturedComponent,
        LastComponent,
        PopularComponent,
        BlogComponent,
        TimeAgoPipe
    ],
    exports: [
        HomeComponent,
        FeaturedComponent,
        LastComponent,
        PopularComponent,
        BlogComponent,
        TimeAgoPipe
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule {}