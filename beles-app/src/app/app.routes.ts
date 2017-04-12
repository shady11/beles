import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LastComponent, ArticleComponent } from './articles';

// Route Configuration
const routes: Routes = [
    { path: "article/:slug", component: ArticleComponent },
    { path: "latest", component: LastComponent },
    { path: "", component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);