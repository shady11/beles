import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FeaturedComponent } from './featured/featured.component';
import { FeaturedItemComponent } from './featured-item/featured-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    FeaturedItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
