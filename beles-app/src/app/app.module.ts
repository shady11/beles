import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FeaturedComponent } from './article/featured/featured.component';

import { ArticleService } from './article/article.service';
import { LastComponent } from './article/last/last.component';
import { PopularComponent } from './article/popular/popular.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    LastComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
