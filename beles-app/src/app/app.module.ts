import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { ArticlesModule } from './articles/articles.module';
import { SvgModule } from './svg/svg.module';

import { AppComponent } from './app.component';

import { routing } from './app.routes';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        HomeModule,
        CoreModule,
        ArticlesModule,
        SvgModule,

        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }